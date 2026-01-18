"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useModalStore } from "@/store/useModalStore";

type User = {
  id: string;
  username: string;
  displayName: string;
  image?: string | null;
};

export default function UserSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const toggle = useModalStore((state) => state.toggle);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/users/search?q=${query}`);
        const data = await res.json();
        setResults(data);
      } catch (err) {
        console.error("Search error", err);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="relative">
      <div className="relative mb-5">
        <label htmlFor="search">
          <Icon
            icon="uil:search"
            className="text-[0.9rem] absolute top-1/2 -translate-y-1/2 left-2.5 text-[#5b5b5b]"
          />
        </label>
        <input
          id="search"
          type="text"
          autoComplete="false"
          onChange={(e) => setQuery(e.target.value)}
          className="input-style input-shadow border-[#d3d3d3] w-full pl-7"
          placeholder="Search users..."
        />
      </div>

      {loading && (
        <Icon
          icon="line-md:loading-loop"
          className="text-[1.6rem] mx-auto text-primary"
        />
      )}

      <div className="max-h-90 overflow-y-auto">
        {results.length > 0 && (
          <div className="z-10 p-1 w-full flex flex-col gap-2">
            {results.map((user) => {
              const displayNameInArray = user.displayName
                .split(/\s+/)
                .slice(0, 2);
              const displayNameInitials = displayNameInArray
                .map((name) => name[0]?.toUpperCase())
                .join("");

              return (
                <Link
                  onClick={toggle}
                  href={`/messages/${user.id}`}
                  key={user.id}
                  className="w-full flex items-center gap-3 px-3 py-2 button-shadow2 border-[0.1em] hover:border-primary focus:border-primary transition-all duration-200 border-[#dcdcdc] rounded-[11px] text-left"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 overflow-hidden">
                    {user.image ? (
                      <Image
                        src={user.image}
                        alt={user.username}
                        width={32}
                        height={32}
                      />
                    ) : (
                      <div className="h-full grid place-items-center">
                        <p className="text-center font-medium">
                          {displayNameInitials}
                        </p>
                      </div>
                    )}
                  </div>

                  <div>
                    <p className="text-small font-medium">{user.displayName}</p>
                    <p className="text-smallest text-gray-600!">
                      @{user.username}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
