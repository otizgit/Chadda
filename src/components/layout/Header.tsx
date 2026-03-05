import Image from "next/image";

type HeaderProps = {
  user: {
    displayName: string | undefined;
    image?: string | null;
  };
};

export default function Header({ user }: HeaderProps) {
  const displayNameInArray = user?.displayName?.split(/\s+/).slice(0, 2);
  const displayNameInitials = displayNameInArray
    ?.map((name) => name[0]?.toUpperCase())
    .join("");

  return (
    <header className="h-15 flex items-center px-6">
      <div className="plain-flex gap-2">
        <div className="w-10 h-10 rounded-full bg-[#E5E7EB] input-shadow">
          {user?.image ? (
            <Image
              src={user?.image}
              alt={user?.displayName || "User Avatar"}
              width={32}
              height={32}
            />
          ) : (
            <div className="h-full grid place-items-center">
              <p className="text-center opacity-70 font-medium">
                {displayNameInitials}
              </p>
            </div>
          )}
        </div>
        <h2 className="font-medium ">{user.displayName}</h2>
      </div>
    </header>
  );
}
