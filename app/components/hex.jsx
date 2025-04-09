
const triangleVisibility = progress => {
    // 6 triangles: 100% / 6 = ~16.66% per part
    return [
      progress >= 16.66,
      progress >= 33.33,
      progress >= 50,
      progress >= 66.66,
      progress >= 83.33,
      progress >= 100,
    ];
  };
  const BadgeReveal = ({ progress = 0 }) => {
    const [t1, t2, t3, t4, t5, t6] = triangleVisibility(progress);

    const width = 428;
    const height = 428;

    // Image URLs
    const badgeImg= 'https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg'
    const mysteryImg= 'https://static.vecteezy.com/system/resources/previews/000/092/023/non_2x/vector-comic-question-mark-background.jpg'


    // Path for the default hexagon shape
    const defaultHex = "M226 13.8564L381.329 103.536C388.755 107.823 393.329 115.746 393.329 124.321V303.679C393.329 312.254 388.755 320.177 381.329 324.464L226 414.144C218.574 418.431 209.426 418.431 202 414.144L46.6706 324.464C39.2449 320.177 34.6706 312.254 34.6706 303.68V124.321C34.6706 115.746 39.2449 107.823 46.6706 103.536L202 13.8564C209.426 9.56922 218.574 9.56922 226 13.8564Z"

    // Paths for the triangles in the hexagon
    const tri1path = 'M214.412 214.484L33.1211 319.227C35.776 323.828 39.6211 327.741 44.3789 330.49L199.035 419.846C203.793 422.595 209.102 423.969 214.412 423.969V214.484Z';
    const tri2path = 'M214.412 5C209.102 5 203.793 6.37372 199.035 9.12256L44.3789 98.4765C39.6211 101.225 35.776 105.14 33.1211 109.742L36.6902 111.803L214.412 214.484V5Z';
    const tri3path = 'M214.41 214.484L395.701 319.227C398.356 314.625 399.821 309.336 399.821 303.838V125.13C399.821 119.632 398.356 114.344 395.701 109.742L392.132 111.803L214.41 214.484Z';
    const tri4path = 'M214.411 214.484L36.6887 111.803L33.1197 109.742C30.4648 114.344 29 119.632 29 125.13V303.838C29 309.336 30.4648 314.625 33.1197 319.227L214.411 214.484Z';
    const tri5path = 'M214.41 214.484V423.969C219.72 423.969 225.03 422.595 229.788 419.846L384.443 330.49C389.202 327.741 393.046 323.828 395.701 319.227L214.41 214.484Z';
    const tri6path = 'M214.41 5V214.484L392.132 111.803L395.701 109.742C393.046 105.14 389.202 101.225 384.443 98.4765L229.788 9.12256C225.03 6.37372 219.72 5 214.41 5Z';
  
    return (
      <div className={`w-[${width}px] h-[${height}px] center mx-auto`}>
        <svg viewBox={`0 0 ${width} ${height}`} xmlns='http://www.w3.org/2000/svg'>
          <defs>
            {/* Clip paths for masking image parts */}
            <clipPath id='triangle1'>
              <path d={tri1path} />
            </clipPath>
            <clipPath id='triangle2'>
              <path d={tri2path} />
            </clipPath>
            <clipPath id='triangle3'>
              <path d={tri3path} />
            </clipPath>
            <clipPath id='triangle4'>
              <path d={tri4path} />
            </clipPath>
            <clipPath id='triangle5'>
              <path d={tri5path} />
            </clipPath>
            <clipPath id='triangle6'>
              <path d={tri6path} />
            </clipPath>
  
            {/* The actual image */}
            <pattern
              id='badgeImage'
              patternUnits='userSpaceOnUse'
              width={width}
              height={height}
            >
              <image
                href={badgeImg}
                x='0'
                y='0'
              
                height={height}
              />
            </pattern>
          </defs>
  
          {/* Background hexagon and question mark */}
          <path
            xmlns='http://www.w3.org/2000/svg'
           d={defaultHex}
            fill='url(#whatbadge)'
            stroke='#F59E0B'
          />
          <pattern
              id='whatbadge'
              patternUnits='userSpaceOnUse'
              width={width}
              height={height}
            >
              <image
                href={mysteryImg}
                x='0'
                y='0'
              
                height={height}
              />
            </pattern>
  
          {/* Image pieces revealed with progress */}
          {progress < 100 ? (
  <>
    {t1 && <path d={tri1path} fill="url(#badgeImage)" />}
    {t2 && <path d={tri2path} fill="url(#badgeImage)" />}
    {t3 && <path d={tri3path} fill="url(#badgeImage)" />}
    {t4 && <path d={tri4path} fill="url(#badgeImage)" />}
    {t5 && <path d={tri5path} fill="url(#badgeImage)" />}
    {t6 && <path d={tri6path} fill="url(#badgeImage)" />}
  </>
) : (
  <path d={defaultHex} fill="url(#badgeImage)" stroke="#F59E0B" />
)}
        </svg>
      </div>
    );
  };
  
  export default BadgeReveal;