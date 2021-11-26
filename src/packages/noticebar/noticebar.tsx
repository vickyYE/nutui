import React, { useState, useEffect, useRef, FunctionComponent, CSSProperties } from 'react'
import './noticebar.scss'
import { number } from 'prop-types'
import Icon from '../icon'
import bem from '@/utils/bem'
import classNames from 'classnames'

export interface NoticeBarProps {
  // 滚动方向  across 横向 vertical 纵向
  direction: string
  className?: string
  style?: CSSProperties
  list: any
  standTime: number
  complexAm: boolean
  height: number
  text: string
  closeMode: boolean
  wrapable: boolean
  leftIcon: string
  color: string
  background: string
  delay: string | number
  scrollable: boolean
  speed: number
  rightIcon?: HTMLElement | any
  close?: (list?: any) => void
  click?: (item?: any) => void
}
const defaultProps = {
  // 滚动方向  across 横向 vertical 纵向
  direction: 'across',
  list: [],
  standTime: 1000,
  complexAm: false,
  height: 40,
  text: '',
  closeMode: false,
  wrapable: false,
  leftIcon: '',
  color: '',
  background: '',
  delay: 1,
  scrollable: true,
  speed: 50,
} as NoticeBarProps
export const NoticeBar: FunctionComponent<
  Partial<NoticeBarProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    className,
    style,
    direction,
    list,
    standTime,
    complexAm,
    height,
    text,
    closeMode,
    wrapable,
    leftIcon,
    color,
    background,
    delay,
    scrollable,
    speed,
    rightIcon,
    close,
    click,
  } = { ...defaultProps, ...props }

  const wrap = useRef<HTMLDivElement>(null)
  const content = useRef<HTMLDivElement>(null)
  // const [scrollList,SetScrollList] = useState([])
  const [showNoticeBar, SetShowNoticeBar] = useState(true)
  let scrollList: any = useRef([])
  const [wrapWidth, SetWrapWidth] = useState(0)
  const [firstRound, SetFirstRound] = useState(true)
  const [duration, SetDuration] = useState(0)
  const [offsetWidth, SetOffsetW] = useState(0)
  const [animationClass, SetAnimationClass] = useState('')
  const [animate, SetAnimate] = useState(false)
  const [distance, SetDistance] = useState(0)
  const [timer, SetTimer] = useState(0)
  // const distance = useRef(0)
  // const timer = useRef<number>(0);
  let keepAlive = false

  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    if (direction == 'vertical') {
      if (children) {
        console.log('children', children)
        let arr: any = []
        // children.map((child:any)=>{

        // 	if(child&&child.props){
        // 		console.log(333,child)
        // 		arr.push(child.props.children)
        // 	}

        // })
        console.log('arr', arr)
        // SetScrollList([].concat(arr))
        scrollList.current = [].concat(arr)
        // scrollList = [].concat(slots.default()[0].children as any);
      } else {
        // SetScrollList([].concat(list))
        scrollList.current = [].concat(list)
      }
      setTimeout(() => {
        complexAm ? startRoll() : startRollEasy()
      }, Number(standTime))
    } else {
      initScrollWrap(text)
    }
    return () => {
      clearInterval(timer)
    }
  }, [])

  //   const newChild = React.Children.map(children,function(childItem){
  //     // console.log('item',childItem)
  // 			if(childItem){
  // 				return React.cloneElement(childItem,{
  // 					       key:childItem.key
  // 					    })
  // 			}
  //
  //   })

  useEffect(() => {
    console.log('scrollList', scrollList)
  }, [scrollList])

  useEffect(() => {
    initScrollWrap(text)
  }, [text])

  useEffect(() => {
    if (list && list.length) {
      // SetScrollList([].concat(list))
      scrollList.current = [].concat(list)
    }
  }, [list])

  const initScrollWrap = (value: string) => {
    if (showNoticeBar == false) {
      return
    }
    setTimeout(() => {
      if (!wrap.current || !content.current) {
        return
      }
      const wrapW = wrap.current.getBoundingClientRect().width
      const offsetW = content.current.getBoundingClientRect().width

      if (scrollable && offsetW > wrapW) {
        SetWrapWidth(wrapW)
        SetOffsetW(offsetW)
        SetDuration(offsetW / speed)
        SetAnimationClass('play')
      } else {
        SetAnimationClass('')
      }
    })
  }
  const handleClick = (event: Event) => {
    click && click()
  }

  const onClickIcon = (event: Event) => {
    SetShowNoticeBar(!closeMode)
    close && close()
  }

  const onAnimationEnd = () => {
    SetFirstRound(false)
    setTimeout(() => {
      SetDuration((offsetWidth + wrapWidth) / speed)
      SetAnimationClass('play-infinite')
    }, 0)
  }

  /**
   * 利益点滚动方式一
   */
  const startRollEasy = () => {
    showhorseLamp()
    let timerCurr = window.setInterval(
      showhorseLamp,
      ~~(height / speed / 4) * 1000 + Number(standTime)
    )
    SetTimer(timerCurr)
  }
  const showhorseLamp = () => {
    SetAnimate(true)
    setTimeout(() => {
      // let scrollData = list
      // scrollData.push(scrollData[0]);
      // scrollData.shift();
      scrollList.current.push(scrollList.current[0])
      scrollList.current.shift()
      // SetScrollList(scrollData)
      SetAnimate(false)
    }, ~~(height / speed / 4) * 1000)
  }

  const startRoll = () => {
    let timerCurr = setInterval(() => {
      let chunk = 100
      for (let i = 0; i < chunk; i++) {
        scroll(i, i < chunk - 1 ? false : true)
      }
    }, Number(standTime) + 100 * speed)
    SetTimer(timerCurr)
  }
  const scroll = (n: number, last: boolean) => {
    setTimeout(() => {
      let long = distance
      long -= height / 100
      // console.log('distance.current',n,distance.current)
      SetDistance(long)
      // distance.current = long
      if (last) {
        // let scrollData =list
        // scrollData.push(scrollData[0]);
        // scrollData.shift();
        scrollList.current.push(scrollList.current[0])
        scrollList.current.shift()
        // SetScrollList(scrollData)
        SetDistance(0)
        // distance.current = 0
      }
    }, n * speed)
  }
  /**
   * 点击滚动单元
   */
  const go = (item: any) => {
    click && click(item)
  }

  const handleClickIcon = () => {
    close && close(scrollList[0])
    // emit('close', state.scrollList[0]);
  }

  // onActivated(() => {
  //   if (state.keepAlive) {
  //     state.keepAlive = false;
  //   }
  // });

  // onDeactivated(() => {
  //   state.keepAlive = true;
  //   clearInterval(state.timer as any);
  // });

  // onUnmounted(() => {
  //   clearInterval(state.timer as any);
  // });
  const iconShow = () => {
    if (leftIcon == 'close') {
      return false
    } else {
      return true
    }
  }

  const contentStyle = {
    paddingLeft: firstRound ? 0 : wrapWidth + 'px',
    animationDelay: (firstRound ? props.delay : 0) + 's',
    animationDuration: duration + 's',
  }

  const barStyle = {
    color: color,
    background: background,
    height: direction == 'vertical' ? `${height}px` : '',
  }

  const horseLampStyle = {
    transform: complexAm ? `translateY(${distance}px)` : '',
    transition: animate ? `all ${~~(height / speed / 4)}s` : '',
    marginTop: animate ? `-${height}px` : '',
  }

  const b = bem('noticebar')
  const noticebarClass = classNames({
    'nut-noticebar-page': true,
    withicon: closeMode,
    close: closeMode,
    wrapable: wrapable,
  })

  return (
    <div className={`${b()}`}>
      {showNoticeBar && direction == 'across' ? (
        <div className={noticebarClass} style={barStyle}>
          <div
            className="left-icon"
            style={{ backgroundImage: `url(${leftIcon ? leftIcon : ''})` }}
          >
            {!leftIcon ? <Icon name={'notice'} size="16" color={color} /> : null}
          </div>
          <div ref={wrap} className="wrap">
            <div
              ref={content}
              className={`content ${animationClass} ${!scrollable && !wrapable && 'nut-ellipsis'}`}
              style={contentStyle}
              onAnimationEnd={onAnimationEnd}
            >
              {children}
              {text}
            </div>
          </div>
          {closeMode ? (
            <div
              className="right-icon"
              onClick={(e: any) => {
                onClickIcon(e)
              }}
            >
              <Icon name={'close'} color={color} />
            </div>
          ) : null}
        </div>
      ) : scrollList.current.length > 0 && direction == 'vertical' ? (
        <div className="nut-noticebar-vertical" style={barStyle}>
          {children ? (
            <div className="horseLamp_list" style={horseLampStyle}>
              {children}
              {/*  {scrollList.map((item:any,index:any)=>{
                return  newChild
              })} */}
            </div>
          ) : (
            <ul className="horseLamp_list" style={horseLampStyle}>
              {scrollList.current.map((item: any, index: any) => {
                return (
                  <li className="horseLamp_list_item" style={{ height: height }} key={index}>
                    {item}
                  </li>
                )
              })}
            </ul>
          )}
          <div className="go">
            {rightIcon ? (
              rightIcon
            ) : closeMode ? (
              <Icon name="cross" color={color} size="11px" />
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}

NoticeBar.defaultProps = defaultProps
NoticeBar.displayName = 'NutNoticeBar'
