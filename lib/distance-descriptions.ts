interface DistanceContext {
  miles: number;
  km: number;
  fromName: string;
  toName: string;
  bearing: number;
  direction: string;
}

export function generateComprehensiveDescription(context: DistanceContext): {
  overview: string;
  travelTimes: { mode: string; time: string; description: string }[];
  comparisons: string[];
  funFacts: string[];
  geography: string;
  perspective: string;
} {
  const { miles, km, fromName, toName, bearing, direction } = context;
  
  // Overview paragraph
  const overview = `The straight-line distance from ${fromName} to ${toName} is ${miles.toLocaleString()} miles (${km.toLocaleString()} kilometers), measured along the great circle path. This represents the shortest possible distance between these two points on Earth's curved surface, heading ${bearing.toFixed(0)}° ${direction}. This measurement, often called the "as the crow flies" distance, provides the theoretical minimum distance that would be traveled if one could move in a perfectly straight line through the Earth's atmosphere, ignoring all terrain, borders, and obstacles.`;

  // Travel time estimates
  const travelTimes = [
    {
      mode: "Commercial Jet (550 mph)",
      time: formatTime(miles / 550),
      description: `A typical commercial airliner cruising at 550 mph would cover this distance in approximately ${formatTime(miles / 550)}. This assumes direct routing at cruise altitude, though actual flight times are typically 15-20% longer due to taxi time, climb, descent, and air traffic routing.`
    },
    {
      mode: "Small Plane (150 mph)",
      time: formatTime(miles / 150),
      description: `A small private aircraft like a Cessna 172, cruising at 150 mph, would need about ${formatTime(miles / 150)} for this journey. Small aircraft often fly more direct routes than commercial flights but at lower speeds and altitudes.`
    },
    {
      mode: "High-Speed Train (186 mph)",
      time: formatTime(miles / 186),
      description: `A high-speed train traveling at 186 mph (300 km/h), similar to Japan's Shinkansen or France's TGV, could theoretically complete this distance in ${formatTime(miles / 186)} if a direct rail line existed.`
    },
    {
      mode: "Car (60 mph average)",
      time: formatTime(miles / 60),
      description: `Driving at an average speed of 60 mph would take approximately ${formatTime(miles / 60)} for the straight-line distance. However, actual driving distances are typically 20-50% longer due to the road network following terrain and populated areas.`
    },
    {
      mode: "Walking (3 mph)",
      time: formatTime(miles / 3),
      description: `Walking at a steady pace of 3 mph would require ${formatTime(miles / 3)} of continuous walking. This represents about ${Math.ceil(miles / 20)} days of walking 20 miles per day, a reasonable daily distance for long-distance hikers.`
    },
    {
      mode: "Speed of Sound",
      time: formatTime(miles / 767),
      description: `Sound waves traveling at 767 mph (at sea level) would take ${formatTime(miles / 767)} to cover this distance. This is roughly the speed of Mach 1 at standard atmospheric conditions.`
    }
  ];

  // Distance comparisons
  const comparisons = generateComparisons(miles, km);
  
  // Fun facts
  const funFacts = generateFunFacts(miles, km);
  
  // Geographical context
  const geography = generateGeographicalContext(miles, km, direction);
  
  // Perspective
  const perspective = generatePerspective(miles, km);

  return {
    overview,
    travelTimes,
    comparisons,
    funFacts,
    geography,
    perspective
  };
}

function formatTime(hours: number): string {
  if (hours < 0.016) {
    return `${Math.round(hours * 3600)} seconds`;
  } else if (hours < 1) {
    return `${Math.round(hours * 60)} minutes`;
  } else if (hours < 24) {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return m > 0 ? `${h} hour${h !== 1 ? 's' : ''} ${m} min` : `${h} hour${h !== 1 ? 's' : ''}`;
  } else {
    const days = Math.floor(hours / 24);
    const h = Math.round(hours % 24);
    return h > 0 ? `${days} day${days !== 1 ? 's' : ''} ${h} hour${h !== 1 ? 's' : ''}` : `${days} day${days !== 1 ? 's' : ''}`;
  }
}

function generateComparisons(miles: number, km: number): string[] {
  const comparisons: string[] = [];
  
  // Earth circumference comparison
  const earthCircumference = 24901;
  const percentOfEarth = (miles / earthCircumference * 100).toFixed(2);
  comparisons.push(`This distance represents ${percentOfEarth}% of Earth's circumference at the equator (24,901 miles). If you were to travel this distance ${Math.round(earthCircumference / miles)} times, you would have circled the entire planet.`);
  
  // Moon distance comparison
  const moonDistance = 238855;
  if (miles < moonDistance) {
    const percentToMoon = (miles / moonDistance * 100).toFixed(2);
    comparisons.push(`This is ${percentToMoon}% of the average distance from Earth to the Moon (238,855 miles). You would need to travel this distance ${Math.round(moonDistance / miles)} times to reach the Moon.`);
  }
  
  // Marathon comparison
  const marathonMiles = 26.2;
  const marathons = Math.round(miles / marathonMiles);
  if (marathons > 1) {
    comparisons.push(`This distance equals approximately ${marathons.toLocaleString()} marathon races placed end to end. A dedicated ultra-runner covering one marathon per day would need ${marathons} days to cover this distance.`);
  }
  
  // Football field comparison
  const footballFieldMiles = 0.0568;
  const footballFields = Math.round(miles / footballFieldMiles);
  if (footballFields < 100000) {
    comparisons.push(`Visualized using American football fields (100 yards each), this distance would require ${footballFields.toLocaleString()} fields placed end to end.`);
  }
  
  // Light travel
  const lightSecond = 186282;
  const lightTime = miles / lightSecond;
  if (lightTime < 1) {
    comparisons.push(`Light, traveling at 186,282 miles per second, would cover this distance in ${(lightTime * 1000).toFixed(1)} milliseconds.`);
  } else {
    comparisons.push(`Light, traveling at 186,282 miles per second, would cover this distance in ${lightTime.toFixed(2)} seconds.`);
  }
  
  return comparisons;
}

function generateFunFacts(miles: number, km: number): string[] {
  const facts: string[] = [];
  
  // Fuel consumption
  const gallonsNeeded = Math.round(miles / 25); // Assuming 25 mpg
  const co2Pounds = Math.round(gallonsNeeded * 19.6); // 19.6 lbs CO2 per gallon
  facts.push(`A typical car getting 25 miles per gallon would consume approximately ${gallonsNeeded} gallons of fuel for this straight-line distance, producing about ${co2Pounds.toLocaleString()} pounds of CO2 emissions.`);
  
  // Calories burned walking
  const caloriesBurned = Math.round(miles * 100); // Approximately 100 calories per mile
  facts.push(`Walking this entire distance would burn approximately ${caloriesBurned.toLocaleString()} calories, equivalent to about ${Math.round(caloriesBurned / 550)} Big Macs or ${Math.round(caloriesBurned / 250)} slices of pizza.`);
  
  // Radio waves
  facts.push(`Radio waves, traveling at the speed of light, would make this journey ${Math.round(186282 / miles)} times in one second. This is why global communications feel instantaneous despite the vast distances involved.`);
  
  // Historical context
  if (miles > 100) {
    facts.push(`Before modern transportation, this journey would have been a significant undertaking. In the 1800s, traveling by horse at 30 miles per day, this trip would have taken ${Math.round(miles / 30)} days of continuous travel.`);
  }
  
  // Animal comparisons
  if (miles > 1000) {
    facts.push(`Arctic terns, which have the longest migration of any bird, travel up to 44,000 miles annually. This distance represents ${(miles / 44000 * 100).toFixed(1)}% of their incredible yearly journey.`);
  }
  
  return facts;
}

function generateGeographicalContext(miles: number, km: number, direction: string): string {
  let context = `Traveling ${direction} from your starting point, this journey `;
  
  if (miles < 100) {
    context += `represents a regional distance, typically staying within the same state or province. Such distances are commonly covered for daily commutes in rural areas or between neighboring cities.`;
  } else if (miles < 500) {
    context += `spans a significant regional distance, potentially crossing state or provincial boundaries. This is typical of journeys between major cities within the same region or country.`;
  } else if (miles < 2000) {
    context += `covers a substantial portion of a continent. In North America, this could take you from coast to coast in smaller countries or across multiple time zones in larger nations.`;
  } else if (miles < 5000) {
    context += `represents a transcontinental or major international distance. Such journeys typically cross multiple countries, time zones, and potentially climate zones.`;
  } else {
    context += `spans a truly global distance, potentially crossing oceans and continents. This is the scale of intercontinental flights and represents a significant portion of Earth's surface.`;
  }
  
  // Add curvature note
  context += ` Due to Earth's curvature, the straight-line path between these points actually passes through the Earth's interior at a maximum depth of approximately ${calculateTunnelDepth(miles).toFixed(0)} miles below the surface, though of course, actual travel follows the curved surface.`;
  
  return context;
}

function generatePerspective(miles: number, km: number): string {
  let perspective = '';
  
  if (miles < 10) {
    perspective = `This relatively short distance is easily covered by bicycle in under an hour, or a pleasant walk in a few hours. It's the scale of a small city or town, where all essential services might be found within this radius.`;
  } else if (miles < 50) {
    perspective = `At this distance, you're looking at a typical metropolitan area span. Many people commute distances like this daily, and it represents the practical limit for regular ground transportation without significant time investment.`;
  } else if (miles < 250) {
    perspective = `This medium-range distance typically requires planned travel. It's beyond daily commuting range but perfect for weekend trips. High-speed rail excels at these distances, making them accessible in 1-2 hours.`;
  } else if (miles < 1000) {
    perspective = `At this range, air travel becomes increasingly practical. While still driveable in a long day, most travelers would choose to fly for convenience. This distance often separates major urban centers within a country.`;
  } else if (miles < 3000) {
    perspective = `This significant distance typically requires air travel for practical purposes. It spans major portions of continents and represents the scale at which cultural, linguistic, and climatic differences become pronounced.`;
  } else {
    perspective = `This vast distance spans continents and oceans, requiring long-haul flights. At this scale, you're dealing with substantial time zone differences, distinct seasons, and dramatically different cultures and environments at each end of the journey.`;
  }
  
  return perspective;
}

function calculateTunnelDepth(miles: number): number {
  // Simplified calculation for tunnel depth
  const earthRadius = 3959; // miles
  const chordLength = miles;
  const halfChord = chordLength / 2;
  
  if (halfChord >= earthRadius) return earthRadius;
  
  const angle = Math.asin(halfChord / earthRadius);
  const depth = earthRadius * (1 - Math.cos(angle));
  
  return depth;
}

export function generateSEODescription(miles: number, km: number, fromName: string, toName: string): string {
  return `The straight-line distance from ${fromName} to ${toName} is ${miles.toLocaleString()} miles (${km.toLocaleString()} kilometers). This "as the crow flies" measurement represents the shortest distance between these two points on Earth's surface, calculated using the great circle path. Actual travel distances by road, rail, or scheduled flights will typically be longer due to routing constraints. Our calculator provides accurate geographical distances using the Haversine formula, which accounts for Earth's curvature.`;
}