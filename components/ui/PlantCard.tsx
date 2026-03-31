import type { Plant } from "@/types";
import { formatPrice } from "@/lib/utils";

interface PlantCardProps {
  plant: Plant;
}

export function PlantCard({ plant }: PlantCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-pine-100 bg-white shadow-sm transition-all hover:shadow-md">
      {/* Image placeholder */}
      <div className="aspect-square overflow-hidden bg-pine-50">
        <div className="flex h-full items-center justify-center text-pine-400 transition-transform group-hover:scale-105">
          <span className="text-5xl">🌱</span>
        </div>
      </div>

      <div className="p-4">
        <p className="text-xs font-medium uppercase tracking-wider text-pine-600">
          {plant.category}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-text">{plant.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-text-muted">
          {plant.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            {formatPrice(plant.price)}
          </span>
          {plant.inStock ? (
            <span className="rounded-full bg-pine-50 px-2.5 py-0.5 text-xs font-medium text-pine-700">
              In Stock
            </span>
          ) : (
            <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500">
              Out of Stock
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
