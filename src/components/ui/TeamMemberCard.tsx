import Image from "next/image";
import type { TeamMember } from "@/types/content";

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const { name, role, credentials, bio, image } = member;

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent-1)] flex items-center justify-center">
            <span className="text-white text-6xl font-bold">{name.charAt(0)}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">{name}</h3>
        <p className="text-[var(--color-primary)] font-medium text-sm">
          {role}
          {credentials && <span className="text-[var(--text-muted)]">, {credentials}</span>}
        </p>
        <p className="mt-3 text-[var(--text-secondary)] text-sm line-clamp-3">
          {bio}
        </p>
      </div>
    </div>
  );
}
