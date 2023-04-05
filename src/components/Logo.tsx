import { useTheme } from '@mui/material'

const Logo = (props: { fill?: string }) => {

  const Theme = useTheme()

  return (<svg width="51" height="47" viewBox="0 0 51 47" xmlns="http://www.w3.org/2000/svg">
    <defs>
      {
        !props?.fill &&
        (<linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop
            offset="0%"
            style={{
              /* @ts-ignore */
              stopColor: Theme.palette.primary[700],
              stopOpacity: 1
            }}
          />
          <stop
            offset="100%"
            style={{
              /* @ts-ignore */
              stopColor: Theme.palette.primary[400],
              stopOpacity: 1
            }}
          />
        </linearGradient>)
      }
    </defs>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12V26.4878C0 32.4734 4.38247 37.4355 10.1138 38.3404C8.67818 36.3626 7.8316 33.9296 7.8316 31.2988V16.811C7.8316 10.1836 13.2042 4.811 19.8316 4.811H34.9895C35.6312 4.811 36.2612 4.86138 36.8757 4.9584C34.6948 1.95382 31.1545 0 27.1579 0H12Z" fill={props?.fill ? props.fill : 'url(#grad1)'} />
    <path fillRule="evenodd" clipRule="evenodd" d="M25.7053 8.65991C19.0778 8.65991 13.7053 14.0325 13.7053 20.6599V35.1477C13.7053 41.1334 18.0879 46.0956 23.8193 47.0003C22.3836 45.0225 21.5369 42.5893 21.5369 39.9583V25.4706C21.5369 18.8431 26.9094 13.4706 33.5369 13.4706H48.6948C49.3364 13.4706 49.9663 13.5209 50.5807 13.6179C48.3998 10.6136 44.8596 8.65991 40.8631 8.65991H25.7053Z" fill={props?.fill ? props.fill : 'url(#grad1)'} />
  </svg>)
}

export default Logo