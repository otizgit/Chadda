"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

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
    }, 300); // debounce

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="relative">
      <div className="relative">
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
          className="input-style bg-light-grey border-none w-full pl-7"
          placeholder="Search users..."
        />
      </div>

      {loading && <p className="mt-2 text-xs text-gray-500">Searching...</p>}

      {results.length > 0 && (
        <div className="absolute z-10 mt-2 p-1 w-full flex flex-col gap-2 rounded-lg border-[0.1em] border-[#e1e1e1] bg-white shadow">
          {results.map((user) => (
            <button
              key={user.id}
              className="w-full flex items-center gap-3 rounded-[7px] px-3 py-2 hover:bg-gray-100 focus:bg-gray-100 text-left"
              onClick={() => {
                console.log("Start chat with", user);
              }}
            >
              <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                {user.image && (
                  <Image
                    src={user.image}
                    alt={user.username}
                    width={32}
                    height={32}
                  />
                )}
              </div>

              <div>
                <p className="text-small font-medium">{user.displayName}</p>
                <p className="text-smallest text-gray-500!">@{user.username}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
