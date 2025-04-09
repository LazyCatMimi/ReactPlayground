
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
    const defaultHex = "M227.5 16.8564L379.798 104.786C387.224 109.073 391.798 116.996 391.798 125.571V301.429C391.798 310.004 387.224 317.927 379.798 322.214L227.5 410.144C220.074 414.431 210.926 414.431 203.5 410.144L51.2016 322.214C43.776 317.927 39.2016 310.004 39.2016 301.43V125.571C39.2016 116.996 43.776 109.073 51.2016 104.786L203.5 16.8564C210.926 12.5692 220.074 12.5692 227.5 16.8564Z"

    // Paths for the triangles in the hexagon
    const tri1path = 'M35.3827 108.585L215.846 4.39426L215.846 212.775L35.3827 108.585Z';
    const tri2path = 'M34.1727 317.943L214.636 213.753L214.636 422.134L34.1727 317.943Z';
    const tri3path = 'M216.873 212.453L397.336 108.262L397.336 316.643L216.873 212.453Z';
    const tri4path = 'M217.5 4.86602L397.963 109.056L217.5 213.247L217.5 4.86602Z';
    const tri5path = 'M217.5 213.866L397.963 318.056L217.5 422.247L217.5 213.866Z';
    const tri6path = 'M35.4997 108.866L215.963 213.056L35.4997 317.247L35.4997 108.866Z';
  
    return (
      <div className='w-[428px] h-[428px] center mx-auto'>
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
          {t1 && (
            <path d={tri1path} fill='url(#badgeImage)' />
          )}
          {t2 && (
            <path d={tri2path} fill='url(#badgeImage)' />
          )}
          {t3 && (
            <path d={tri3path}fill='url(#badgeImage)' />
          )}
          {t4 && (
            <path d={tri4path}                                                                                                        fill='url(#badgeImage)' />
          )}
          {t5 && (
            <path d={tri5path} fill='url(#badgeImage)' />
          )}
          {t6 && (
            <path
              d={tri6path}
              fill='url(#badgeImage)'
            />
          )}
        </svg>
      </div>
    );
  };
  
  export default BadgeReveal;