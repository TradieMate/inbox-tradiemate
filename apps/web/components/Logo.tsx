export function Logo(props: any) {
  return (
    <div className="flex items-center space-x-2" {...props}>
      <svg width="32" height="32" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <title>Tradiemate AI</title>
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#7DD3FC', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#0F766E', stopOpacity:1}} />
          </linearGradient>
        </defs>
        <path d="M10 5 L40 5 Q45 5 45 10 L45 15 Q45 20 40 20 L30 20 L30 40 Q30 45 25 45 L20 45 Q15 45 15 40 L15 20 L10 20 Q5 20 5 15 L5 10 Q5 5 10 5 Z" fill="url(#gradient2)"/>
      </svg>
      <span className="text-xl font-bold text-gray-900 dark:text-white">Tradiemate AI</span>
    </div>
  );
}
