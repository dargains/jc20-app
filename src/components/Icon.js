import React from 'react'
import cx from 'classnames'

const SVGBase = ({
  name,
  children,
  fill = "currentColor",
  height = 24,
  viewbox = "0 0 24 24",
  handleClick,
  className
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox={viewbox}
      className={cx(`icon icon--${name}`, className)}
      fill={fill}
      onClick={handleClick}
    >
      {children}
    </svg>
  );
}

const Area = props => {
  return (
    <SVGBase name="area" {...props}>
      <g transform="translate(-843 -243)">
        <g transform="translate(793 -465)">
            <g transform="translate(52 710)" strokeWidth="1px" stroke="currentColor" fill="none">
              <path d="M0.6 0.6H15.4V15.4H0.6z" transform="translate(2 2)"/>
              <path d="M0.6 0.6H3.4V3.4H0.6z"/>
              <path d="M0.6 0.6H3.4V3.4H0.6z" transform="translate(16 16)"/>
              <path d="M0.6 0.6H3.4V3.4H0.6z" transform="translate(0 16)"/>
              <path d="M0.6 0.6H3.4V3.4H0.6z" transform="translate(16)"/>
            </g>
            <text fontFamily="Roboto-Bold, Roboto" fontSize="6px" fontWeight="700" transform="translate(59 722)">
              <tspan x="0" y="0">m</tspan><tspan y="0" baselineShift="1.9997999810363178" fontSize="3.5px">2</tspan>
            </text>
        </g>
    </g>
    </SVGBase>
  )
}

const Bathroom = props => {
  return (
    <SVGBase name="bathroom" {...props}>
      <g transform="translate(-485 -243)">
        <g  transform="translate(487 245.561)">
          <path d="M.651 10.483V2.28A2.283 2.283 0 0 1 2.931 0h1.877a1.627 1.627 0 0 1 1.408.814l.726 1.254a1.938 1.938 0 0 1 1.753.971.326.326 0 0 1-.118.445l-2.822 1.63a.326.326 0 0 1-.163.044.342.342 0 0 1-.085-.011.326.326 0 0 1-.2-.152A1.959 1.959 0 0 1 5.281 3.1l-.567-.985a.328.328 0 0 0-.282-.163h-1.5a.326.326 0 0 0-.326.326v8.143h15.96a.975.975 0 0 1 .326 1.894v.385a5.543 5.543 0 0 1-4.886 5.5v.367a.977.977 0 0 1-1.954 0v-.327H7.491v.326a.977.977 0 1 1-1.954 0V18.2a5.543 5.543 0 0 1-4.886-5.5v-.385a.927.927 0 0 1-.361-.225.957.957 0 0 1-.29-.69.977.977 0 0 1 .651-.917zm5.1-6.118L7.932 3.1a1.3 1.3 0 0 0-1.122-.371 1.268 1.268 0 0 0-.692.333 1.351 1.351 0 0 0-.192.223 1.3 1.3 0 0 0-.178 1.08zM2.931 1.3h1.5a.981.981 0 0 1 .847.489l.436.757c.008-.007.018-.012.027-.019a1.784 1.784 0 0 1 .528-.323l-.617-1.065a.974.974 0 0 0-.844-.488H2.931A1.631 1.631 0 0 0 1.3 2.28v8.143h.651V2.28a.977.977 0 0 1 .98-.98zM12.7 18.566a.326.326 0 0 0 .651 0v-.326H12.7zm-6.514 0a.326.326 0 0 0 .651 0v-.326h-.648zM1.3 12.7a4.891 4.891 0 0 0 4.886 4.886h7.166A4.891 4.891 0 0 0 18.24 12.7v-.326H1.3zm-.549-1.068a.312.312 0 0 0 .226.093h17.589a.326.326 0 0 0 .326-.326.318.318 0 0 0-.1-.232.312.312 0 0 0-.226-.093H.977a.326.326 0 0 0-.326.326.318.318 0 0 0 .1.232z"/>
          <g transform="translate(7.166 4.536)">
            <path d="M272.135 111.467a.326.326 0 0 1 .445.119l.651 1.129a.326.326 0 1 1-.562.33l-.651-1.129a.326.326 0 0 1 .117-.449z" transform="translate(-271.972 -111.423)"/>
          </g>
          <g transform="translate(8.295 3.887)">
            <path d="M244.452 95.512a.326.326 0 0 1 .442.118l.651 1.129a.326.326 0 1 1-.564.326l-.651-1.129a.326.326 0 0 1 .122-.444z" transform="translate(-244.287 -95.469)"/>
          </g>
          <g transform="translate(6.038 5.19)">
            <path d="M299.876 127.512a.326.326 0 0 1 .442.118l.651 1.129a.326.326 0 0 1-.564.326l-.651-1.129a.326.326 0 0 1 .122-.444z" transform="translate(-299.711 -127.469)"/>
          </g>
          <g transform="translate(7.741 6.836)">
            <path d="M258.019 167.959a.326.326 0 0 1 .445.119l.651 1.128a.326.326 0 1 1-.564.326l-.651-1.132a.326.326 0 0 1 .119-.441z" transform="translate(-257.856 -167.916)"/>
          </g>
          <g transform="translate(9.044 6.185)">
            <path d="M226.018 151.959a.326.326 0 0 1 .445.119l.651 1.128a.326.326 0 0 1-.564.326l-.65-1.132a.326.326 0 0 1 .118-.441z" transform="translate(-225.855 -151.916)"/>
          </g>
        </g>
      </g>
    </SVGBase>
  )
}

const Bedroom = props => {
  return (
    <SVGBase name="bedroom" {...props}>
      <path d="M18.053 66.411v-3.605a1.954 1.954 0 0 0-1.989-2.206H3.872a1.942 1.942 0 0 0-1.989 2.206v3.605A2.189 2.189 0 0 0 0 68.878v2.8a.812.812 0 0 0 .77.854h.257v2.206a.812.812 0 0 0 .77.854h.727a.812.812 0 0 0 .77-.854v-2.23h13.412v2.23a.812.812 0 0 0 .77.854h.724a.812.812 0 0 0 .77-.854v-2.23h.257a.812.812 0 0 0 .77-.854v-2.776a2.275 2.275 0 0 0-1.944-2.467zM2.61 62.806h.043c0-1.115.663-1.352 1.219-1.352h12.192c.556 0 1.219.237 1.219 1.352v3.582h-.578v-2.04a.812.812 0 0 0-.77-.854H11.23a.812.812 0 0 0-.77.854v2.04h-.9v-2.04a.812.812 0 0 0-.77-.854H4.086a.812.812 0 0 0-.77.854v2.04H2.61zm13.326 1.542v2.04H11.23v-2.04zm-7.1 0v2.04H4.128v-2.04zM2.5 74.736h-.725v-2.23H2.5zm15.658 0h-.727v-2.23h.727zm1.005-3.06H.749V70.42h18.417zm0-2.111H.749v-.688c0-1.423.941-1.637 1.476-1.637H17.69c.556 0 1.476.213 1.476 1.637v.688z" transform="translate(-437 -243) translate(439 247.898) translate(0 -60.6)"/>
    </SVGBase>
  )
}

const Car = props => {
  return (
    <SVGBase name="car" {...props}>
      <path d="M18.089 19.421l1.021-.121a.954.954 0 0 0-.121-1.9h-.712a1.012 1.012 0 0 0-.949.625l-1-2.058a2.863 2.863 0 0 0-1.974-1.52 40.024 40.024 0 0 0-8.72 0 2.863 2.863 0 0 0-1.974 1.52l-1 2.058a1.012 1.012 0 0 0-.949-.625h-.7a.954.954 0 0 0-.121 1.9l1.021.117-.977.923a1.971 1.971 0 0 0-.608 1.72l.334 2.226a2.226 2.226 0 0 0 .846 1.42v1.011a1.125 1.125 0 0 0 1.154 1.09h1.915a1.125 1.125 0 0 0 1.154-1.09v-.491h8.542v.491a1.125 1.125 0 0 0 1.154 1.09h1.913a1.125 1.125 0 0 0 1.154-1.09v-1.009a2.226 2.226 0 0 0 .846-1.42l.334-2.226a1.971 1.971 0 0 0-.608-1.72zm-1.114 6.085H3.025a1.611 1.611 0 0 1-1.592-1.234h17.133a1.611 1.611 0 0 1-1.591 1.234zm-2.469-3.132l.389 1.176h-.53l-.389-1.176zm-1.331 0l.389 1.176H6.436l.389-1.176zm-7.54 1.176h-.53l.389-1.176h.53zm-1.331 0H1.322l-.177-1.176h3.548zm11.392 0l-.389-1.176h3.547l-.177 1.176zm2.335-5.193a.24.24 0 0 1 .246-.232h.712a.232.232 0 0 1 .03.463l-.987.113v-.343zm-12.22-3.2a40.705 40.705 0 0 1 8.378 0 2.163 2.163 0 0 1 .885.419 57.65 57.65 0 0 0-10.148 0 2.163 2.163 0 0 1 .885-.423zm-1.579 1.381a3.012 3.012 0 0 1 .763-.244 56.092 56.092 0 0 1 10.011 0 3.012 3.012 0 0 1 .762.244l1.182 2.444H3.05zM.765 18.356a.24.24 0 0 1 .246-.232h.712a.24.24 0 0 1 .246.232v.344l-.987-.113a.238.238 0 0 1-.217-.231zM2.692 19.7h14.616l1.217 1.15a1.284 1.284 0 0 1 .4.8H1.077a1.284 1.284 0 0 1 .4-.8zm2.272 7.014a.379.379 0 0 1-.389.368H2.661a.379.379 0 0 1-.389-.368v-.608a2.486 2.486 0 0 0 .754.117h1.938zm12.764 0a.379.379 0 0 1-.389.368h-1.914a.379.379 0 0 1-.389-.368v-.491h1.939a2.486 2.486 0 0 0 .753-.117v.608z" transform="translate(-533 -243) translate(535 234.463)"/>
    </SVGBase>
  )
}

const Click = props => {
  return (
    <SVGBase name="click" {...props}>
      <g transform="translate(-341 -243)">
        <g transform="translate(346.323 245)">
          <path d="M13.207 56.5h-.029a1.054 1.054 0 0 0-1.025 1.081v.843a.3.3 0 1 1-.608 0V56.87a1 1 0 1 0-2 0v1.65a.3.3 0 0 1-.608 0v-2.1a1.052 1.052 0 0 0-1.016-1.088H7.89a1.018 1.018 0 0 0-1 1.042v2.368a.3.3 0 0 1-.608 0v-2.3-.023-5.433a1.065 1.065 0 0 0-1.015-1.1 1.065 1.065 0 0 0-1.016 1.1L4.248 59.9a.3.3 0 0 1-.539.193L2.644 58.8a1.62 1.62 0 0 0-1.144-.6 1.586 1.586 0 0 0-1.191.427l-.009.002-.211.171 3.69 7.091a3.273 3.273 0 0 0 2.874 1.82h4.265a3.44 3.44 0 0 0 3.3-3.553v-2.439-4.132a1.051 1.051 0 0 0-1.011-1.087zm0 0" transform="translate(0 -47.715)"/>
          <path d="M48.9 3.377a.3.3 0 0 0 .3-.3 2.453 2.453 0 1 1 4.906 0 .3.3 0 0 0 .608 0 3.061 3.061 0 1 0-6.123 0 .3.3 0 0 0 .309.3zm0 0" transform="translate(-46.396)"/>
        </g>
      </g>
    </SVGBase>
  )
}

const Close = props => {
  return (
    <SVGBase name="user" {...props}>
      <g transform="translate(0.707 0.707)">
        <line x2="19" y2="19" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line y1="19" x2="19" fill="none" stroke="currentColor" strokeWidth="2"/>
      </g>
    </SVGBase>
  )
}

const Construction = props => {
  return (
    <SVGBase name="construction" {...props}>
      <g transform="translate(-149 -243)">
        <g transform="translate(151 245)">
          <g transform="translate(1.935 16.129)">
            <path d="M54.774 400h-6.451a.3.3 0 0 0-.323.323v3.226a.3.3 0 0 0 .323.323h6.452a.3.3 0 0 0 .323-.323v-3.226a.3.3 0 0 0-.324-.323zm-2.581 3.226H50.9v-1.29h1.29zm2.258 0h-1.612v-1.613a.3.3 0 0 0-.323-.323h-1.935a.3.3 0 0 0-.323.323v1.613h-1.613v-2.581h5.806z" transform="translate(-48 -400)"/>
          </g>
          <path d="M19.677 7.1A.3.3 0 0 0 20 6.774V3.548a.293.293 0 0 0-.129-.258L16 .065A.346.346 0 0 0 15.806 0H11.29a.291.291 0 0 0-.161.032L5.1 3.226H.323A.3.3 0 0 0 0 3.548v3.226a.3.3 0 0 0 .323.326h4.838v.677a1.292 1.292 0 0 0-.935 1.548 1.364 1.364 0 0 0 .935.935v.84L.129 14.9a.347.347 0 0 0-.065.452.293.293 0 0 0 .258.129h10.323a.3.3 0 0 0 .323-.323.293.293 0 0 0-.129-.258l-5.033-3.771v-.839a1.292 1.292 0 0 0 .935-1.548 1.364 1.364 0 0 0-.935-.935V7.1h5.806v10.965H10a.3.3 0 0 0-.323.323v1.29A.3.3 0 0 0 10 20h9.677a.3.3 0 0 0 .323-.323v-1.29a.3.3 0 0 0-.323-.323h-.323V17.1a.3.3 0 0 0-.323-.323h-2.579a.3.3 0 0 0-.323.323v.968h-.645V7.1zm-.323-.645h-2.128l2.129-2.129zm-3.032 0h-.839v-.649h.323a.3.3 0 0 0 .323-.323V3.871H18.9zM14.516.645h1.161l3.1 2.581h-2.648v-.968a.3.3 0 0 0-.323-.323h-1.29zm-1.29 0h.645v1.29h-.645zM.645 3.871h2.129L.645 6zm2.581 2.581H1.1l2.126-2.129zm.645-2.581H6L3.871 6zm5.806 10.968H1.29l4.194-3.161zM6.129 9.032a.645.645 0 1 1-.645-.645.647.647 0 0 1 .645.645zm.323-2.581H4.323l2.129-2.128zm4.9-5.806h1.226v1.29a2.251 2.251 0 0 0-2.032 1.29h-4.1zM7.1 3.871h2.126L7.1 6zm.452 2.581l2.581-2.581h.226a1.1 1.1 0 0 0-.032.323v1.29a.3.3 0 0 0 .323.323h.968v.645zm9.226 10.968h1.932v.645h-1.936zm2.581 1.29v.645h-9.036v-.645zm-4.968-12.9l-2.133 2.125V5.806zm-.839-.645V3.871h.645v1.29zm1.29 1.1v2.122H12.71zm-.452 2.774l-2.129 2.129V9.032zm.452.452v2.129H12.71zm-.452 2.774l-2.129 2.129v-2.136zm.452.452v2.129H12.71zm-.452 2.774l-2.129 2.129v-2.136zm.452.452v2.129H12.71zm0-10.774V3.548a.3.3 0 0 0-.323-.323h-1.29a.3.3 0 0 0-.323.323v1.613h-1.938v-.967a1.6 1.6 0 0 1 1.613-1.613h2.9v2.58z"/>
        </g>
      </g>
    </SVGBase>
  )
}

const Contact = props => {
  return (
    <SVGBase name="contact" {...props}>
      <g transform="translate(-245 -243)">
        <g transform="translate(247.056 245.056)">
          <path d="M18.191 7.206h-3.819a4.947 4.947 0 1 0-8.8 0H1.753A1.755 1.755 0 0 0 0 8.959v9.232A1.751 1.751 0 0 0 .717 19.6l.034.024a1.742 1.742 0 0 0 1 .316h16.44a1.743 1.743 0 0 0 1-.316l.035-.025a1.751 1.751 0 0 0 .717-1.413V8.959a1.755 1.755 0 0 0-1.753-1.753zM1.169 18.191V8.959a.585.585 0 0 1 .01-.107l6.014 4.677-6.01 4.788a.583.583 0 0 1-.014-.126zm6.973-3.923l.751.587a1.75 1.75 0 0 0 2.16 0l.751-.587 5.658 4.507H2.484zm4.609-.739l6.014-4.677a.585.585 0 0 1 .01.107v9.232a.583.583 0 0 1-.014.126zM9.972 1.169a3.778 3.778 0 1 1-3.778 3.778 3.783 3.783 0 0 1 3.778-3.778zm0 8.725a4.933 4.933 0 0 0 3.563-1.519h3.94l-6.029 4.689-1.114.871a.583.583 0 0 1-.72 0L8.5 13.062 2.469 8.375h3.94a4.933 4.933 0 0 0 3.563 1.519z" />
          <path d="M241.584 116.038a.584.584 0 0 0 .584-.584v-1.87a.584.584 0 1 0-1.169 0v1.87a.584.584 0 0 0 .585.584z" transform="translate(-231.612 -108.598)"/>
          <path d="M241.584 113.871c.323 0 .584-.075.584-.167v-.536c0-.092-.262-.167-.584-.167s-.584.075-.584.167v.536c0 .096.262.167.584.167z" transform="translate(-231.612 -110.431)"/>
        </g>
      </g>
    </SVGBase>
  )
}

const Download = props => {
  return (
    <SVGBase name="download" {...props}>
      <g transform="translate(-351 -330)">
        <g transform="translate(353 330.476)">
          <g transform="translate(0 13.846)">
            <path d="M36.3 307.2a.769.769 0 0 0-.769.769v4.615a.769.769 0 0 1-.769.769H19.374a.769.769 0 0 1-.769-.769v-4.615a.769.769 0 1 0-1.538 0v4.615a2.308 2.308 0 0 0 2.308 2.308h15.383a2.308 2.308 0 0 0 2.308-2.308v-4.615a.769.769 0 0 0-.766-.769z"  transform="translate(-17.066 -307.2)"/>
          </g>
          <g transform="translate(5.394 1.571)">
            <path d="M145.721 12.17a.822.822 0 0 0-1.069 0l-2.535 2.317V.7a.772.772 0 0 0-1.538 0v13.788l-2.533-2.318a.821.821 0 0 0-1.088.017.661.661 0 0 0 0 .978l3.846 3.519a.821.821 0 0 0 1.088 0l3.846-3.519a.662.662 0 0 0-.017-.995z" transform="translate(-136.742)"/>
          </g>
        </g>
      </g>
    </SVGBase>
  )
}

const Drink = props => {
  return (
    <SVGBase name="drink" {...props}>
      <g transform="translate(-197 -243)">
        <g transform="translate(199 245)">
          <path d="M16.322 0a3.682 3.682 0 0 0-3.656 3.287H10.11a.391.391 0 0 0 0 .781h5.269l-2.293 2.293a1.71 1.71 0 0 1-1.544-.019 2.47 2.47 0 0 0-2.4 0 1.7 1.7 0 0 1-1.579 0 2.435 2.435 0 0 0-1.578-.283L4.528 4.068H6.6a.391.391 0 0 0 0-.781H3.954L1.854.425a.391.391 0 0 0-.63.462l1.761 2.4H.391a.391.391 0 0 0-.276.667l3 3 .012.012 2.51 2.512.788 1.846a1.111 1.111 0 0 0 1.163.805h.378v4.578L4.554 19.3a.391.391 0 0 0 .236.7h7.132a.391.391 0 0 0 .236-.7l-3.411-2.59v-4.58h.378a1.111 1.111 0 0 0 1.163-.805l.787-1.846 2.516-2.516.009-.013.41-.41A3.678 3.678 0 1 0 16.322 0zM3.626 6.361L1.334 4.068h2.224L5.21 6.319l-.041.024a1.71 1.71 0 0 1-1.543.019zm7.135 12.857h-4.81l2.406-1.826zm-1.192-8.2c-.128.3-.169.331-.445.331H7.588c-.275 0-.317-.031-.445-.331l-.585-1.372h3.6zm1.015-2.153H6.129L4.575 7.311a2.239 2.239 0 0 0 1-.3 1.7 1.7 0 0 1 1.578 0 2.473 2.473 0 0 0 2.4 0 1.7 1.7 0 0 1 1.578 0 2.24 2.24 0 0 0 1 .3zm2.869-5.578a2.881 2.881 0 0 1 .566-1.361l1.361 1.361zm2.479 3.261a2.862 2.862 0 0 1-1.363-.564l1.363-1.363zm0-3.814l-1.361-1.361a2.881 2.881 0 0 1 1.36-.565zm3.261.552h-1.928l1.361-1.362a2.882 2.882 0 0 1 .566 1.363zM16.713.808a2.882 2.882 0 0 1 1.361.565l-1.361 1.361zm0 5.739V4.62l1.361 1.361a2.883 2.883 0 0 1-1.361.566zm1.913-1.117l-1.361-1.362h1.927a2.883 2.883 0 0 1-.566 1.362z"/>
            <path d="M204.313 84.921a.391.391 0 1 0-.393-.391.39.39 0 0 0 .395.391z" transform="translate(-195.956 -80.853)"/>
        </g>
      </g>
    </SVGBase>
  )
}

const Externa = props => {
  return (
    <SVGBase name="externa" {...props}>
      <g transform="translate(-891 -243)">
        <g transform="translate(893 246.012)">
          <g transform="translate(2.446)">
            <path d="M71.622 37.705a1.744 1.744 0 0 0 2.9 0 1.745 1.745 0 0 0 3.2-.967.309.309 0 0 0-.014-.088 6.706 6.706 0 0 0-1.419-2.325.293.293 0 0 0-.433.4A6.64 6.64 0 0 1 77 36.446h-2.245l-.005-.02a8.96 8.96 0 0 0-.855-2.067 6.054 6.054 0 0 0-1.125-1.448q-.092-.085-.188-.165a6.927 6.927 0 0 1 2.453 1.212.293.293 0 0 0 .36-.462 8.285 8.285 0 0 0-5.224-1.641 9.034 9.034 0 0 0-3.73.743 7.253 7.253 0 0 0-2.314 1.644 6.738 6.738 0 0 0-1.5 2.407.617.617 0 0 0-.014.089 1.745 1.745 0 0 0 3.2.967 1.743 1.743 0 0 0 2.9 0 1.759 1.759 0 0 0 .5.5v3.776h-2.377a.293.293 0 0 0 0 .586h9.354a.347.347 0 1 1 0 .693H64.15a.347.347 0 1 1 0-.693h1.514a.293.293 0 1 0 0-.586H64.15a.933.933 0 1 0 0 1.865h3.257L69 46.089l-2 2.815a.3.3 0 0 0 .239.463h1.615a.293.293 0 0 0 .239-.123l1.072-1.511 1.072 1.511a.293.293 0 0 0 .239.123H73.1a.3.3 0 0 0 .239-.463l-2-2.815 1.6-2.248h3.257a.933.933 0 1 0 0-1.865h-5.075V38.2a1.757 1.757 0 0 0 .501-.495zm5.478-.674a1.159 1.159 0 0 1-2.243 0zm-6.5 6.81l-.429.6-.429-.6zm-1.891 4.94h-.9l1.554-2.181.448.631zm3.821 0h-.9l-3.506-4.94h.9zm-1.551-3.2l-.448-.631.788-1.11h.9zm2.1-7.685a1.161 1.161 0 0 1-1.122-.866H74.2a1.161 1.161 0 0 1-1.126.87zm-2.213-5.381h.02l.082.02a3.54 3.54 0 0 1 1.749 1.15 6.469 6.469 0 0 1 .964 1.524 8.941 8.941 0 0 1 .468 1.23h-2.237v-.012a9.442 9.442 0 0 0-.267-2.066 5.911 5.911 0 0 0-.78-1.84l-.008-.012zm-6.5 5.381a1.161 1.161 0 0 1-1.122-.866h2.243a1.161 1.161 0 0 1-1.126.87zm1.226-1.46v.008h-2.253a6.665 6.665 0 0 1 3.357-3.32 7.349 7.349 0 0 1 1.061-.378l-.082.069a6.4 6.4 0 0 0-1.532 2.125 9.232 9.232 0 0 0-.556 1.498zm1.678 1.46a1.161 1.161 0 0 1-1.122-.866h2.243a1.161 1.161 0 0 1-1.125.87zm1.277-2.771v.008a9.227 9.227 0 0 0-.1.959q-.01.175-.014.351H66.2c.282-.942 1.22-3.459 3.286-3.928a6.427 6.427 0 0 0-.943 2.612zm.478 1.13a9.322 9.322 0 0 1 .117-1.132 6.105 6.105 0 0 1 .721-2.1 3.589 3.589 0 0 1 .312-.453 3.357 3.357 0 0 1 .313.451 6.121 6.121 0 0 1 .722 2.136 9.187 9.187 0 0 1 .115 1.279h-2.31l.006-.178zm1.514 5.719H69.8v-3.53h.013a1.76 1.76 0 0 0 .718 0zm.118-4.184a1.16 1.16 0 0 1-1.605-.76h2.243a1.164 1.164 0 0 1-.642.762z" transform="translate(-62.616 -31.856)"/>
          </g>
          <g transform="translate(13.774 9.022)">
            <path d="M358.35 262.977l-.594-.146a.651.651 0 0 0-.781.473l-.923 3.749H353.2a.574.574 0 0 0-.574.574v.756a.574.574 0 0 0 .54.572l-.544 1.977a.3.3 0 0 0 .283.371h1.175a.293.293 0 0 0 .283-.216l.583-2.131h.275l.583 2.131a.293.293 0 0 0 .283.216h1.175a.3.3 0 0 0 .282-.371l-.55-2a.949.949 0 0 0 .724-.7l1.1-4.473a.652.652 0 0 0-.468-.782zm-4.491 7.739h-.567l.485-1.761h.564zm2.454 0l-.482-1.761h.564l.485 1.761zm1.94-7.1l-1.1 4.473a.365.365 0 0 1-.355.278h-3.582v-.731h3.066a.293.293 0 0 0 .285-.223l.977-3.972a.061.061 0 0 1 .072-.044l.594.146a.06.06 0 0 1 .044.075z" transform="translate(-352.615 -262.813)"/>
          </g>
          <g id="Group_224" transform="translate(0 9.022)">
            <path d="M6.216 270.937l-.544-1.978a.574.574 0 0 0 .54-.572v-.756a.574.574 0 0 0-.574-.574H2.789l-.923-3.749a.654.654 0 0 0-.781-.473l-.594.146a.652.652 0 0 0-.473.781l1.1 4.473a.949.949 0 0 0 .724.7l-.55 2a.3.3 0 0 0 .282.371h1.177a.293.293 0 0 0 .283-.216l.583-2.131h.275l.583 2.131a.293.293 0 0 0 .283.216h1.175a.3.3 0 0 0 .283-.369zm-3.688-.215h-.567l.485-1.761h.564zm2.454 0l-.482-1.761h.564l.485 1.761zm.643-2.347H2.043a.365.365 0 0 1-.355-.278l-1.1-4.473a.06.06 0 0 1 .044-.072l.594-.146a.06.06 0 0 1 .072.044l.977 3.972a.293.293 0 0 0 .284.223h3.066z" transform="translate(0 -262.818)"/>
          </g>
        </g>
    </g>
    </SVGBase>
  )
}

const Eye = props => {
  return (
    <SVGBase name="eye" {...props}>
      <g transform="translate(-639 -330)">
        <g transform="translate(641 243.165)">
          <g transform="translate(0 92.835)">
            <g>
              <path d="M19.873 98.82c-.179-.244-4.436-5.985-9.873-5.985S.305 98.575.127 98.819a.66.66 0 0 0 0 .778c.178.244 4.436 5.985 9.873 5.985s9.694-5.74 9.873-5.984a.659.659 0 0 0 0-.778zM10 104.264c-4.005 0-7.474-3.81-8.5-5.055 1.026-1.247 4.487-5.055 8.5-5.055s7.473 3.809 8.5 5.055c-1.025 1.247-4.486 5.055-8.5 5.055z" transform="translate(0 -92.835)"/>
            </g>
          </g>
          <g transform="translate(6.044 95.253)">
            <g>
              <path d="M158.678 154.725a3.956 3.956 0 1 0 3.956 3.956 3.961 3.961 0 0 0-3.956-3.956zm0 6.593a2.637 2.637 0 1 1 2.637-2.637 2.64 2.64 0 0 1-2.637 2.637z" transform="translate(-154.722 -154.725)"/>
            </g>
          </g>
        </g>
      </g>
    </SVGBase>
  )
}

const Facebook = props => {
  return (
    <SVGBase name="facebook" {...props}>
      <path d="M18.558 0H1.443A1.442 1.442 0 0 0 0 1.442v17.115A1.442 1.442 0 0 0 1.443 20h9.241v-7.735h-2.6V9.238h2.6V7.01a3.637 3.637 0 0 1 3.882-3.99 21.363 21.363 0 0 1 2.329.119v2.7h-1.589c-1.254 0-1.5.6-1.5 1.47v1.929h3l-.391 3.027h-2.606V20h4.749A1.442 1.442 0 0 0 20 18.557V1.442A1.442 1.442 0 0 0 18.558 0zm0 0" transform="translate(-447 -330) translate(449 332)"/>
    </SVGBase>
  )
}

const Image = props => {
  return (
    <SVGBase name="image" {...props}>
      <g transform="translate(-101 -243)">
        <g transform="translate(103 246.908)">
          <path d="M176.029 159.668a2.04 2.04 0 1 0 2.04 2.04 2.04 2.04 0 0 0-2.04-2.04zm0 3.109a1.069 1.069 0 1 1 0-2.137 1.069 1.069 0 1 1 0 2.137z"  transform="translate(-165.901 -153.481)"/>
          <path d="M18.264 28.1L5 26.594a1.821 1.821 0 0 0-1.433.413 1.846 1.846 0 0 0-.7 1.263l-.243 1.992h-.753A1.952 1.952 0 0 0 0 32.277v9.933a1.846 1.846 0 0 0 1.8 1.89h13.4a1.994 1.994 0 0 0 2.04-1.894v-.389a2.429 2.429 0 0 0 .923-.389 2.016 2.016 0 0 0 .7-1.311l1.117-9.861a1.967 1.967 0 0 0-1.716-2.156zm-1.991 14.11a1.023 1.023 0 0 1-1.069.923H1.871a.874.874 0 0 1-.9-.848V40.41l3.765-2.769a1.166 1.166 0 0 1 1.506.073l2.648 2.335a2.283 2.283 0 0 0 1.433.534 2.21 2.21 0 0 0 1.166-.316l4.784-2.767v4.71zm0-5.853l-5.295 3.084a1.239 1.239 0 0 1-1.433-.121l-2.671-2.356a2.162 2.162 0 0 0-2.7-.1L.972 39.2v-6.923a.98.98 0 0 1 .9-1.044H15.2a1.117 1.117 0 0 1 1.069 1.044v4.08zm2.745-6.227v.01L17.876 40a.826.826 0 0 1-.316.656c-.1.1-.316.146-.316.194v-8.573a2.089 2.089 0 0 0-2.04-2.016H3.6l.219-1.894a1.117 1.117 0 0 1 .364-.631 1.117 1.117 0 0 1 .729-.194l13.236 1.53a.971.971 0 0 1 .87 1.058z" transform="translate(0 -26.576)"/>
        </g>
      </g>
    </SVGBase>
  )
}

const Instagram = props => {
  return (
    <SVGBase name="instagram" {...props}>
      <path d="M14.666 20H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4zM3.6 7.2v5.861a3.475 3.475 0 0 0 3.47 3.47h5.86a3.475 3.475 0 0 0 3.47-3.47V7.2a3.475 3.475 0 0 0-3.47-3.47H7.069A3.475 3.475 0 0 0 3.6 7.2zm3.47 8.175a2.316 2.316 0 0 1-2.314-2.314V7.2a2.316 2.316 0 0 1 2.313-2.316h5.861A2.316 2.316 0 0 1 15.244 7.2v5.861a2.316 2.316 0 0 1-2.314 2.314zm.039-5.244A2.892 2.892 0 1 0 10 7.237a2.895 2.895 0 0 0-2.892 2.892zm5.63-3.316a.578.578 0 1 0 .579-.579.579.579 0 0 0-.58.577zm-4.474 3.314A1.735 1.735 0 1 1 10 11.864a1.735 1.735 0 0 1-1.735-1.735z" transform="translate(-495 -330) translate(497 332)"/>
    </SVGBase>
  )
}

const Interna = props => {
  return (
    <SVGBase name="interna" {...props}>
      <g transform="translate(-53 -243)">
        <g transform="translate(47 229.645)">
          <path d="M26.387 242.581v-.968A1.615 1.615 0 0 0 24.774 240H19.29a1.611 1.611 0 0 0-1.29.647 1.611 1.611 0 0 0-1.29-.647h-5.484a1.615 1.615 0 0 0-1.613 1.613v.968A1.615 1.615 0 0 0 8 244.194V250a.323.323 0 0 0 .323.323h19.354A.323.323 0 0 0 28 250v-5.806a1.615 1.615 0 0 0-1.613-1.613zm-15.161 7.1H8.645v-5.484a.969.969 0 0 1 .968-.968h.645a.969.969 0 0 1 .968.968zm-.968-7.1v-.968a.969.969 0 0 1 .968-.968h5.484a.969.969 0 0 1 .968.968v3.872a1.605 1.605 0 0 0-.968-.323h-3.871a1.605 1.605 0 0 0-.968.323v-1.291a1.615 1.615 0 0 0-1.613-1.613zm7.419 4.194v.968h-5.806v-.968a.969.969 0 0 1 .968-.968h3.871a.969.969 0 0 1 .967.967zm6.452 2.9H11.871v-1.29h12.258zm0-1.935h-5.806v-.968a.969.969 0 0 1 .968-.968h3.871a.969.969 0 0 1 .968.968zm0-3.548v1.291a1.605 1.605 0 0 0-.968-.323H19.29a1.605 1.605 0 0 0-.968.323v-3.872a.969.969 0 0 1 .968-.968h5.484a.969.969 0 0 1 .968.968v.968a1.615 1.615 0 0 0-1.613 1.613zm3.226 5.484h-2.581v-5.484a.969.969 0 0 1 .968-.968h.645a.969.969 0 0 1 .968.968z"  transform="translate(0 -214.968)"/>
          <path d="M138 16h-9.677a.323.323 0 0 0-.323.323v7.1a.323.323 0 0 0 .323.323H138a.323.323 0 0 0 .323-.323v-7.1A.323.323 0 0 0 138 16zm-.323 7.1h-9.032v-6.455h9.032z" transform="translate(-115.161)"/>
          <path d="M160.065 40h-7.742a.323.323 0 0 0-.323.323v5.161a.323.323 0 0 0 .323.323h7.742a.323.323 0 0 0 .323-.323v-5.161a.323.323 0 0 0-.323-.323zm-6.408 5.161l.924-1.109.924 1.109zm2.688 0l-.672-.806 1.314-1.577 1.787 2.383zm3.4 0h-.161l-2.323-3.1a.323.323 0 0 0-.506-.013l-1.5 1.8-.424-.509a.323.323 0 0 0-.5 0l-1.516 1.819h-.171v-4.513h7.1z" transform="translate(-138.194 -23.032)"/>
          <path d="M192.968 65.935a.968.968 0 1 0-.968-.968.968.968 0 0 0 .968.968zm0-1.29a.323.323 0 1 1-.323.323.323.323 0 0 1 .323-.323z" transform="translate(-176.581 -46.065)"/>
        </g>
      </g>
    </SVGBase>
  )
}

const Lang = props => {
  return (
    <span className="border border-white rounded-full w-6 h-6 leading-5 text-xs align-middle text-center">{props.lang}</span>
  )
}

const Linkedin = props => {
  return (
    <SVGBase name="linkedin" {...props}>
      <path d="M18.62 0H1.447A1.447 1.447 0 0 0 0 1.447v17.172a1.447 1.447 0 0 0 1.447 1.447H18.62a1.447 1.447 0 0 0 1.447-1.447V1.447A1.447 1.447 0 0 0 18.62 0zM7.118 15.167H4.674V7.816h2.444zM5.9 6.812h-.02a1.274 1.274 0 1 1 .032-2.54 1.274 1.274 0 1 1-.012 2.54zm10.033 8.355h-2.447v-3.932c0-.988-.354-1.662-1.238-1.662a1.338 1.338 0 0 0-1.254.894 1.673 1.673 0 0 0-.08.6v4.105H8.47s.032-6.662 0-7.351h2.443v1.036a2.426 2.426 0 0 1 2.2-1.213c1.608 0 2.813 1.051 2.813 3.309zm0 0" transform="translate(-543 -330) translate(544.933 331.934)"/>
    </SVGBase>
  )
}

const Menu = props => {
  return (
    <SVGBase name="menu" {...props}>
      <g transform="translate(-647 -243)">
        <g transform="translate(605 -265.697)">
          <path d="M0 0h19.918" strokeWidth="2px" stroke="currentColor" transform="translate(44 515)"/>
          <path fill="none" strokeWidth="2px" stroke="currentColor" d="M0 0L20 0" transform="translate(44 520.697)"/>
          <path d="M0 0h20" strokeWidth="2px" stroke="currentColor" transform="translate(44 526.697)"/>
        </g>
    </g>
    </SVGBase>
  )
}

const RC = props => {
  return (
    <SVGBase name="rc" {...props}>
      <g transform="translate(-293 -243)">
        <g transform="translate(134 -86.542)">
          <path d="M35.78 121.39l-3.7-6.369a5.308 5.308 0 0 0 3.185-5.132v-.05c0-3.4-2.248-5.515-6.023-5.678-.165-.007-.31-.011-.479-.011h-8.875l1.976 3.423h6.577c1.848 0 2.98.837 2.98 2.462v.05c0 1.453-1.059 2.438-2.906 2.438h-2.233q2.56 4.433 5.115 8.865z" transform="translate(145.22 228.849)"/>
          <path d="M17.3 125.226h-5.919l2.157-3.736h5.923l2.961 5.129-2.157 3.736z" transform="translate(149.62 219.883)"/>
        </g>
    </g>
    </SVGBase>
  )
}

const Search = props => {
  return (
    <SVGBase name="search" {...props}>
      <path d="M19.716 18.543l-5.676-5.676a7.916 7.916 0 1 0-1.176 1.176l5.676 5.676a.832.832 0 1 0 1.176-1.176zM7.9 14.141A6.237 6.237 0 1 1 14.138 7.9 6.244 6.244 0 0 1 7.9 14.141z" transform="translate(-399 -330) translate(401.04 332.131) translate(0 -.003)"/>
    </SVGBase>
  )
}

const Share = props => {
  return (
    <SVGBase name="share" {...props} >
      <g transform="translate(-695 -243)">
        <g transform="translate(698 245)">
          <path d="M320.085 18.708A2.708 2.708 0 1 1 317.376 16a2.708 2.708 0 0 1 2.709 2.708zm0 0" transform="translate(-302.376 -15.375)"/>
          <path d="M302 6.667a3.333 3.333 0 1 1 3.333-3.333A3.337 3.337 0 0 1 302 6.667zm0-5.417a2.083 2.083 0 1 0 2.083 2.083A2.086 2.086 0 0 0 302 1.25zm0 0" transform="translate(-287.001)"/>
          <path d="M320.085 360.041a2.708 2.708 0 1 1-2.708-2.708 2.708 2.708 0 0 1 2.708 2.708zm0 0" transform="translate(-302.376 -343.374)"/>
          <path d="M302 348a3.333 3.333 0 1 1 3.333-3.333A3.337 3.337 0 0 1 302 348zm0-5.417a2.083 2.083 0 1 0 2.083 2.083 2.086 2.086 0 0 0-2.083-2.084zm0 0" transform="translate(-287.001 -327.999)"/>
          <path d="M21.417 189.376a2.708 2.708 0 1 1-2.708-2.708 2.708 2.708 0 0 1 2.708 2.708zm0 0" transform="translate(-15.375 -179.376)"/>
          <path d="M3.333 177.335A3.333 3.333 0 1 1 6.667 174a3.337 3.337 0 0 1-3.333 3.333zm0-5.417A2.083 2.083 0 1 0 5.417 174a2.086 2.086 0 0 0-2.083-2.083zm0 0" transform="translate(0 -164.001)"/>
          <path d="M115.183 96.291a.833.833 0 0 1-.413-1.558l7.732-4.408a.833.833 0 1 1 .825 1.448l-7.733 4.408a.828.828 0 0 1-.412.109zm0 0" transform="translate(-109.882 -86.69)"/>
          <path d="M122.936 272.294a.828.828 0 0 1-.412-.109l-7.733-4.408a.833.833 0 0 1 .825-1.448l7.733 4.408a.833.833 0 0 1-.413 1.558zm0 0" transform="translate(-109.904 -255.819)"/>
        </g>
      </g>
    </SVGBase>
  )
}

const Suite = props => {
  return (
    <SVGBase name="suite" viewbox="0 0 48 24" {...props}>
      <g transform="translate(-581 -243)">
        <g transform="translate(583 248.81)">
          <path d="M15.75 65.67v-3.146a1.7 1.7 0 0 0-1.736-1.924H3.378a1.694 1.694 0 0 0-1.735 1.924v3.146A1.91 1.91 0 0 0 0 67.822v2.442a.708.708 0 0 0 .672.745H.9v1.924a.708.708 0 0 0 .672.745H2.2a.708.708 0 0 0 .672-.745v-1.945h11.7v1.945a.708.708 0 0 0 .672.745h.634a.708.708 0 0 0 .672-.745v-1.945h.224a.708.708 0 0 0 .672-.745v-2.421a1.985 1.985 0 0 0-1.696-2.152zM2.277 62.524h.037c0-.973.578-1.179 1.064-1.179h10.636c.485 0 1.064.207 1.064 1.179v3.125h-.5v-1.78a.708.708 0 0 0-.672-.745H9.8a.708.708 0 0 0-.672.745v1.78h-.786v-1.78a.708.708 0 0 0-.672-.745H3.564a.708.708 0 0 0-.672.745v1.78h-.615zM13.9 63.869v1.78H9.8v-1.78zm-6.2 0v1.78H3.6v-1.78zm-5.517 9.064h-.634v-1.945h.634zm13.66 0h-.634v-1.945h.634zm.877-2.669H.653v-1.1H16.72zm0-1.842H.653v-.6c0-1.242.821-1.428 1.288-1.428h13.492c.485 0 1.288.186 1.288 1.428v.6z" transform="translate(0 -60.6)"/>
        </g>
        <g transform="translate(607 246.888)">
          <path d="M.533 8.582V1.867A1.869 1.869 0 0 1 2.4 0h1.536a1.332 1.332 0 0 1 1.153.667l.594 1.027a1.587 1.587 0 0 1 1.435.795.267.267 0 0 1-.1.365L4.712 4.187a.267.267 0 0 1-.133.036.28.28 0 0 1-.069-.009.267.267 0 0 1-.162-.125 1.6 1.6 0 0 1-.024-1.549l-.464-.807a.268.268 0 0 0-.231-.133H2.4a.267.267 0 0 0-.267.267v6.666H15.2a.8.8 0 0 1 .267 1.551v.316a4.538 4.538 0 0 1-4 4.5v.3a.8.8 0 0 1-1.6 0v-.267H6.133v.267a.8.8 0 0 1-1.6 0v-.3a4.538 4.538 0 0 1-4-4.5v-.315a.759.759 0 0 1-.3-.185A.783.783 0 0 1 0 9.333a.8.8 0 0 1 .533-.751zm4.173-5.009l1.788-1.032a1.061 1.061 0 0 0-.919-.306 1.038 1.038 0 0 0-.566.272 1.106 1.106 0 0 0-.157.183 1.067 1.067 0 0 0-.146.883zM2.4 1.067h1.229a.8.8 0 0 1 .693.4l.357.619.022-.016a1.461 1.461 0 0 1 .432-.265L4.627.933a.8.8 0 0 0-.691-.4H2.4a1.335 1.335 0 0 0-1.333 1.334v6.666H1.6V1.867a.8.8 0 0 1 .8-.8zm8 14.133a.267.267 0 0 0 .533 0v-.267H10.4zm-5.333 0a.267.267 0 0 0 .533 0v-.267h-.533zm-4-4.8a4 4 0 0 0 4 4h5.867a4 4 0 0 0 4-4v-.267H1.067zm-.452-.877A.256.256 0 0 0 .8 9.6h14.4a.267.267 0 0 0 .267-.267.261.261 0 0 0-.082-.19.256.256 0 0 0-.185-.077H.8a.267.267 0 0 0-.267.267.261.261 0 0 0 .082.19z" />
          <g transform="translate(5.867 3.714)">
            <path d="M272.105 111.459a.267.267 0 0 1 .364.1l.533.924a.267.267 0 1 1-.46.27l-.533-.924a.267.267 0 0 1 .096-.37z" transform="translate(-271.972 -111.423)"/>
          </g>
          <g transform="translate(6.791 3.182)">
            <path d="M244.422 95.5a.267.267 0 0 1 .362.1l.533.924a.267.267 0 1 1-.462.267l-.533-.924a.267.267 0 0 1 .1-.367z" transform="translate(-244.287 -95.469)"/>
          </g>
          <g transform="translate(4.944 4.249)">
            <path d="M299.846 127.5a.267.267 0 0 1 .362.1l.533.924a.267.267 0 0 1-.462.267l-.533-.924a.267.267 0 0 1 .1-.367z" transform="translate(-299.711 -127.469)"/>
          </g>
          <g transform="translate(6.338 5.597)">
            <path d="M257.989 167.951a.267.267 0 0 1 .364.1l.533.924a.267.267 0 1 1-.462.267l-.533-.924a.267.267 0 0 1 .098-.367z" transform="translate(-257.856 -167.916)"/>
          </g>
          <g transform="translate(7.405 5.064)">
            <path id="Path_1165" d="M225.988 151.951a.267.267 0 0 1 .364.1l.533.924a.267.267 0 0 1-.462.267l-.533-.924a.267.267 0 0 1 .098-.367z" transform="translate(-225.855 -151.916)"/>
          </g>
        </g>
        <path d="M0 0H1V16H0z" transform="translate(603 247)"/>
      </g>
    </SVGBase>
  )
}

const ThreeSixty = props => {
  return (
    <SVGBase name="360" {...props}>
      <g transform="translate(-591 -330)">
        <g transform="translate(593 335.77)">
          <g>
            <rect width="20.06" height="12.45" fill="rgba(0,0,0,0)" rx="4.84"/>
            <path d="M17.22 18.23H6.84A4.85 4.85 0 0 1 2 13.38v-2.76a4.85 4.85 0 0 1 4.84-4.85h10.38a4.85 4.85 0 0 1 4.84 4.85v2.76a4.85 4.85 0 0 1-4.84 4.85zM6.84 6.47a4.15 4.15 0 0 0-4.15 4.15v2.76a4.15 4.15 0 0 0 4.15 4.15h10.38a4.15 4.15 0 0 0 4.15-4.15v-2.76a4.15 4.15 0 0 0-4.15-4.15z" transform="translate(-2 -5.77)"/>
          </g>
          <g isolation="isolate" transform="translate(4.319 4.306)">
            <g isolation="isolate">
              <path d="M7.21 11.76h.42a.59.59 0 0 0 .44-.15.56.56 0 0 0 .14-.39.5.5 0 0 0-.14-.37.53.53 0 0 0-.39-.13.62.62 0 0 0-.38.12.39.39 0 0 0-.15.32h-.78a.94.94 0 0 1 .17-.55 1.11 1.11 0 0 1 .46-.39 1.59 1.59 0 0 1 .66-.13 1.47 1.47 0 0 1 1 .3 1 1 0 0 1 .35.82.85.85 0 0 1-.16.5 1.1 1.1 0 0 1-.43.34.94.94 0 0 1 .66.92 1 1 0 0 1-.39.84 1.53 1.53 0 0 1-1 .32 1.44 1.44 0 0 1-1-.31 1 1 0 0 1-.37-.82h.78a.45.45 0 0 0 .17.36.64.64 0 0 0 .41.14.62.62 0 0 0 .44-.15.53.53 0 0 0 .15-.35c0-.39-.21-.59-.64-.59h-.42z" transform="translate(-6.319 -10.076)"/>
              <path d="M11.71 10.1v.64h-.07a1.36 1.36 0 0 0-.86.28 1.13 1.13 0 0 0-.38.74 1.05 1.05 0 0 1 .79-.32 1 1 0 0 1 .81.37 1.5 1.5 0 0 1 .31 1 1.44 1.44 0 0 1-.17.69 1.23 1.23 0 0 1-.47.49 1.41 1.41 0 0 1-.69.17 1.26 1.26 0 0 1-1-.43 1.67 1.67 0 0 1-.38-1.16v-.28a2.57 2.57 0 0 1 .24-1.13 1.76 1.76 0 0 1 .69-.76 2 2 0 0 1 1.05-.27zm-.76 2a.65.65 0 0 0-.34.1.58.58 0 0 0-.23.26v.24a1.08 1.08 0 0 0 .15.61.51.51 0 0 0 .44.22.49.49 0 0 0 .4-.2.76.76 0 0 0 .16-.51.77.77 0 0 0-.16-.52.5.5 0 0 0-.37-.23z" transform="translate(-6.319 -10.076)"/>
              <path d="M15.42 12.45a2 2 0 0 1-.34 1.25 1.19 1.19 0 0 1-1 .43 1.17 1.17 0 0 1-1-.42 1.91 1.91 0 0 1-.35-1.22v-.73a2 2 0 0 1 .34-1.25 1.37 1.37 0 0 1 2 0 2 2 0 0 1 .35 1.21zm-.79-.8a1.45 1.45 0 0 0-.13-.71.45.45 0 0 0-.42-.22.43.43 0 0 0-.4.21 1.25 1.25 0 0 0-.14.66v1a1.52 1.52 0 0 0 .13.72.46.46 0 0 0 .42.23.44.44 0 0 0 .41-.22 1.38 1.38 0 0 0 .13-.69z" transform="translate(-6.319 -10.076)"/>
              <path d="M16 11.05a1 1 0 0 1 .26-.7.89.89 0 0 1 .68-.26.9.9 0 0 1 .68.26 1 1 0 0 1 .26.71v.19a1 1 0 0 1-.26.7.91.91 0 0 1-.68.26.93.93 0 0 1-.68-.26 1 1 0 0 1-.26-.71zm.48.2a.66.66 0 0 0 .12.42.43.43 0 0 0 .34.15.42.42 0 0 0 .34-.15.63.63 0 0 0 .12-.41v-.21a.61.61 0 0 0-.12-.41.43.43 0 0 0-.34-.15.46.46 0 0 0-.34.14.67.67 0 0 0-.12.43z" transform="translate(-6.319 -10.076)"/>
            </g>
          </g>
        </g>
      <path d="M0 0H24V24H0z" fill="none" transform="translate(591 330)"/>
    </g>
    </SVGBase>
  )
}

const User = props => {
  return (
    <SVGBase name="user" {...props}>
      <path d="M17.071 12.459a10.023 10.023 0 0 0-3.8-2.3 5.516 5.516 0 0 0 2.51-4.591A5.686 5.686 0 0 0 10 0a5.686 5.686 0 0 0-5.781 5.571 5.516 5.516 0 0 0 2.51 4.591 10.023 10.023 0 0 0-3.8 2.3A9.4 9.4 0 0 0 0 19.273h1.562A8.3 8.3 0 0 1 10 11.142a8.3 8.3 0 0 1 8.437 8.131H20a9.4 9.4 0 0 0-2.929-6.814zM10 9.636a4.149 4.149 0 0 1-4.219-4.065A4.149 4.149 0 0 1 10 1.506a4.149 4.149 0 0 1 4.219 4.065A4.149 4.149 0 0 1 10 9.636z" transform="translate(-743 -243) translate(745 245.283)"/>
    </SVGBase>
  )
}

const Whatsapp = props => {
  return (
    <SVGBase name="user" {...props} width="146.199" height="144.452" viewBox="0 0 146.199 144.452">
      <defs>
        <filter id="Caminho_842" x="0" y="0" width="146.199" height="144.452" filterUnits="userSpaceOnUse">
          <feOffset dy="-6" input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="13.5" result="blur"/>
          <feFlood floodOpacity="0.161"/>
          <feComposite operator="in" in2="blur"/>
          <feComposite in="SourceGraphic"/>
        </filter>
      </defs>
      <g transform="translate(-354.384 -213.617)">
        <g transform="matrix(1, 0, 0, 1, 354.38, 213.62)" filter="url(#Caminho_842)">
          <path d="M427.484,260.117c-17.976,0-32.6,14.234-32.6,31.728a30.967,30.967,0,0,0,5.078,17l-5.011,13.3a1.032,1.032,0,0,0,.24,1.1,1.1,1.1,0,0,0,.78.321,1.119,1.119,0,0,0,.343-.054l14.182-4.6a33.171,33.171,0,0,0,16.987,4.65,32.694,32.694,0,0,0,30.847-21.456,30.423,30.423,0,0,0,1.752-10.269C460.083,274.348,445.455,260.117,427.484,260.117Z" transform="translate(-354.38 -213.62)" fill="#fff"/>
        </g>
        <g transform="translate(411.023 275.26)">
          <g transform="translate(0 0)">
            <path id="Caminho_841" dataName="Caminho 841" d="M447.461,290.063A19.472,19.472,0,0,1,443.205,289a4.2,4.2,0,0,0-4.408.941l-1.482,1.473a24.477,24.477,0,0,1-8.155-8.137l1.483-1.481a4.178,4.178,0,0,0,.94-4.4,19.4,19.4,0,0,1-1.062-4.259,4.144,4.144,0,0,0-4.165-3.584h-4.779c-.124,0-.25.005-.368.018a4.169,4.169,0,0,0-3.783,4.522l0,.021a32.549,32.549,0,0,0,5.038,14.208,32.2,32.2,0,0,0,9.854,9.838,32.731,32.731,0,0,0,14.2,5.034c.129.012.257.017.39.017a4.175,4.175,0,0,0,4.16-4.184v-4.757A4.173,4.173,0,0,0,447.461,290.063Z" transform="translate(-417.41 -269.561)" fill="#012b25"/>
          </g>
        </g>
      </g>
    </SVGBase>
  )
}





export default {
  Area,
  Bathroom,
  Bedroom,
  Car,
  Click,
  Close,
  Construction,
  Contact,
  Download,
  Drink,
  Externa,
  Eye,
  Facebook,
  Image,
  Instagram,
  Interna,
  Lang,
  Linkedin,
  Menu,
  RC,
  Search,
  Share,
  Suite,
  ThreeSixty,
  User,
  Whatsapp
}
