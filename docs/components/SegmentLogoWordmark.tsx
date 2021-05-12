import React from 'react'
import Box from 'ui-box'
import { PolymorphicBoxProps } from 'evergreen-ui'

interface Props extends PolymorphicBoxProps<'svg'> {
  white?: boolean
}

const SegmentLogoWordmark: React.FC<Props> = ({ white = true, ...rest }) => {
  return (
    <Box is="svg" viewBox="0 0 125 27" width="125px" height="27px" {...rest}>
      <path
        d="M46.001 12.942c2.542.567 3.999 2.175 3.999 4.41C50 20.003 47.716 22 44.687 22c-3.584 0-5.282-2.234-5.677-4.325a.581.581 0 0 1 .395-.658l1.273-.412a.57.57 0 0 1 .47.054c.142.085.24.228.272.393.238 1.262 1.216 2.61 3.246 2.61 1.726 0 2.798-.82 2.798-2.142 0-1.034-.754-1.813-2.016-2.083l-2.097-.463c-2.36-.52-3.77-2.13-3.77-4.305C39.58 8.138 41.909 6 44.666 6c3.726 0 4.823 2.478 5.122 3.543a.591.591 0 0 1-.365.717l-1.16.414a.56.56 0 0 1-.451-.03.597.597 0 0 1-.296-.363c-.138-.471-.747-2.006-2.809-2.006-1.489 0-2.611.966-2.611 2.247 0 1.007.605 1.695 1.706 1.936l2.2.484zm76.794.555c-.07 0-.127.053-.127.12v4.945c0 .849.34 1.164 1.254 1.164.107 0 .244-.007.386-.021a.654.654 0 0 1 .485.15.576.576 0 0 1 .207.438v1.011a.593.593 0 0 1-.48.576 5.9 5.9 0 0 1-1.204.12c-2.007 0-3.253-1.203-3.253-3.14v-5.243c0-.067-.057-.12-.128-.12h-1.31c-.344 0-.625-.266-.625-.592v-1.09c0-.327.28-.592.625-.592h.207c1.166 0 1.41-.725 1.41-1.333V8.59c0-.326.28-.591.626-.591h1.175c.345 0 .625.265.625.591v2.512c0 .066.057.12.127.12h1.58c.344 0 .625.265.625.592v1.09c0 .326-.28.592-.626.592h-1.579zm-53.712 5.617c-1.63 0-2.642-1.145-2.642-2.988 0-1.815 1.037-2.988 2.642-2.988 1.555 0 2.6 1.2 2.6 2.988 0 1.787-1.045 2.988-2.6 2.988zm4.341-7.926h-1.228a.584.584 0 0 0-.576.599.12.12 0 0 1-.074.112.098.098 0 0 1-.111-.017c-.633-.585-1.521-.882-2.641-.882C66.016 11 64 13.156 64 16.126c0 2.958 2.016 5.105 4.794 5.105 1.026 0 1.956-.341 2.618-.961a.102.102 0 0 1 .115-.018.12.12 0 0 1 .073.111v.427c0 2.067-.892 3.03-2.806 3.03-1.215 0-2.168-.762-2.426-1.94a.573.573 0 0 0-.689-.438l-1.206.282a.586.586 0 0 0-.434.696c.433 2.141 2.343 3.58 4.755 3.58 1.796 0 3.164-.554 4.066-1.647.746-.903 1.14-2.157 1.14-3.626v-8.955a.58.58 0 0 0-.576-.584zM56.99 11C54.537 11 52 13.046 52 16.47c0 1.652.543 3.06 1.571 4.074.953.94 2.255 1.456 3.667 1.456 2.1 0 3.803-1.095 4.556-2.928a.584.584 0 0 0-.009-.463.569.569 0 0 0-.336-.306l-1.025-.353a.576.576 0 0 0-.716.315c-.442 1.038-1.273 1.564-2.47 1.564-1.448 0-2.55-.972-2.742-2.42a.114.114 0 0 1 .028-.092.117.117 0 0 1 .09-.041h6.8a.577.577 0 0 0 .577-.54 5.32 5.32 0 0 0 .009-.308C62 13.08 60.08 11 56.99 11zm2.488 4.114a.12.12 0 0 1-.119.135h-4.658a.122.122 0 0 1-.096-.046.105.105 0 0 1-.022-.089c.213-.967 1.046-1.943 2.427-1.943 1.356 0 2.28.726 2.468 1.943zM89.114 11C91.048 11 93 12.276 93 15.128v6.279a.604.604 0 0 1-.612.593h-1.304a.604.604 0 0 1-.612-.593V15.34c0-.785-.259-2.103-1.994-2.103-1.29 0-2.192.96-2.192 2.337v5.832a.603.603 0 0 1-.612.593h-1.326a.604.604 0 0 1-.612-.593V15.34c0-.785-.26-2.103-1.994-2.103-1.324 0-2.214.947-2.214 2.358v5.81a.604.604 0 0 1-.612.594h-1.304a.604.604 0 0 1-.612-.593V11.89c0-.327.274-.593.612-.593h1.238c.338 0 .612.266.612.593 0 .068.045.097.072.109.022.009.08.026.135-.023.707-.62 1.71-.977 2.753-.977 1.313 0 2.44.561 3.091 1.54.02.03.05.046.087.048.047.003.09-.02.119-.058.778-1 1.953-1.53 3.395-1.53zm10.876 0C97.537 11 95 13.046 95 16.47c0 1.652.543 3.06 1.571 4.074.953.94 2.255 1.456 3.667 1.456 2.1 0 3.803-1.095 4.556-2.928a.587.587 0 0 0-.009-.463.57.57 0 0 0-.336-.306l-1.025-.353a.577.577 0 0 0-.717.315c-.442 1.038-1.272 1.564-2.469 1.564-1.448 0-2.55-.973-2.742-2.42a.12.12 0 0 1 .119-.133h6.8a.576.576 0 0 0 .576-.54c.005-.097.009-.203.009-.308C105 13.08 103.08 11 99.99 11zm-2.29 4.25a.122.122 0 0 1-.095-.047.105.105 0 0 1-.022-.089c.213-.967 1.046-1.943 2.427-1.943 1.356 0 2.28.726 2.469 1.944a.12.12 0 0 1-.119.135H97.7zM112.206 11c2.34 0 3.795 1.639 3.795 4.277v6.13c0 .327-.26.593-.578.593h-1.253a.587.587 0 0 1-.578-.593v-5.79c0-1.55-.703-2.337-2.091-2.337-1.542 0-2.091 1.328-2.091 2.571v5.556c0 .327-.26.593-.578.593h-1.253a.587.587 0 0 1-.578-.593V11.89c0-.327.26-.593.578-.593h1.211c.32 0 .579.266.579.593v.076c0 .072.05.101.072.11.025.011.076.023.122-.023.686-.69 1.6-1.054 2.643-1.054zm-97.97 16c-1.334 0-2.652-.194-3.917-.576a1.327 1.327 0 0 1-.901-1.668c.223-.703.99-1.097 1.71-.879 1.002.303 2.048.456 3.108.456 4.639 0 8.666-2.903 10.023-7.224.22-.704.984-1.101 1.707-.885.722.216 1.128.962.907 1.666-1.71 5.449-6.789 9.11-12.637 9.11zM3.4 11c-.136 0-.274-.02-.41-.06-.74-.219-1.156-.976-.93-1.69C3.814 3.717 9.015 0 15.004 0c1.367 0 2.717.197 4.011.585.74.221 1.152.98.923 1.694-.23.714-1.014 1.115-1.752.892a11.08 11.08 0 0 0-3.182-.464c-4.75 0-8.875 2.948-10.264 7.335A1.396 1.396 0 0 1 3.4 11z"
        fill={white ? '#ffffff' : '#43AF79'}
      />
      <path
        d="M27.641 12H11.36c-.75 0-1.359-.672-1.359-1.5S10.608 9 11.359 9H27.64c.75 0 1.359.672 1.359 1.5s-.608 1.5-1.359 1.5zm-9.894 6.832H1.367C.612 18.832 0 18.235 0 17.5s.612-1.333 1.367-1.333h16.38c.755 0 1.367.597 1.367 1.333s-.612 1.333-1.367 1.333zM24 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-16 18a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
        fill={white ? '#ffffff' : '#93C8A2'}
      />
    </Box>
  )
}

export default SegmentLogoWordmark
