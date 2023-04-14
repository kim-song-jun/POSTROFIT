<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="139"
    height="66.764"
    viewBox="0 0 139 66.764"
  >
    <defs>
      <filter
        id="출발_Icon"
        x="0"
        y="0"
        width="79.001"
        height="66.764"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy="3" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feFlood flood-opacity="0.89" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="도착_Icon"
        x="60"
        y="0"
        width="79"
        height="59"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy="3" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="4" result="blur-2" />
        <feFlood flood-opacity="0.89" />
        <feComposite operator="in" in2="blur-2" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g
      id="Click_Toggle"
      data-name="Click Toggle"
      transform="translate(-159 -447)"
    >
      <g transform="matrix(1, 0, 0, 1, 159, 447)" filter="url(#출발_Icon)">
        <path
          id="출발_Icon-2"
          data-name="출발_Icon"
          d="M-6698.395,5585.211-6702,5578h-23a10,10,0,0,1-10-10v-15a10,10,0,0,1,10-10h35a10,10,0,0,1,10,10v15a10,10,0,0,1-10,10h-3l-3.6,7.212a.991.991,0,0,1-.9.553A.988.988,0,0,1-6698.395,5585.211Z"
          transform="translate(6747 -5534)"
          fill="#fff"
        />
      </g>
      <g transform="matrix(1, 0, 0, 1, 159, 447)" filter="url(#도착_Icon)">
        <rect
          id="도착_Icon-2"
          data-name="도착_Icon"
          width="55"
          height="35"
          rx="10"
          transform="translate(72 9)"
          fill="#fff"
        />
      </g>
      <text
        id="출발"
        transform="translate(183 480)"
        fill="#707070"
        font-size="16"
        font-family="MalgunGothicBold, Malgun Gothic"
      >
        <tspan x="0" y="0">출발</tspan>
      </text>
      <text
        id="도착"
        transform="translate(242 480)"
        fill="#707070"
        font-size="16"
        font-family="MalgunGothicBold, Malgun Gothic"
      >
        <tspan x="0" y="0">도착</tspan>
      </text>
    </g>
  </svg>
</template>

<script>
export default {};
</script>

<style scoped></style>
