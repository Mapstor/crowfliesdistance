import Link from 'next/link';

interface RelatedDistance {
  fromCity: string;
  toCity: string;
  slug: string;
  miles: number;
}

interface RelatedDistancesProps {
  distances: RelatedDistance[];
  title?: string;
}

export default function RelatedDistances({ distances, title = 'Related Distances' }: RelatedDistancesProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <div className="space-y-2">
        {distances.map((distance, index) => (
          <Link
            key={index}
            href={`/${distance.slug}`}
            className="block p-3 hover:bg-gray-50 rounded transition-colors"
          >
            <div className="flex justify-between items-center">
              <span className="text-gray-700">
                {distance.fromCity} to {distance.toCity}
              </span>
              <span className="text-blue-600 font-medium">
                {distance.miles.toLocaleString()} mi
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}