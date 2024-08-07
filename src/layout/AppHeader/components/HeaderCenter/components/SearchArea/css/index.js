import styled from 'styled-components';

export const SearchAreaWrapper=styled.div`
        position: relative;
        display: flex;
        justify-content: center;
        height: 48px;
    .search-area{
        display:flex;
        position:absolute;
        align-items:center;
        justify-content:space-between;
        width:300px;
        height:48px;
        cursor:pointer;
        transition: box-shadow 200ms ease;
        box-sizing: border-box;
        padding: 0 8px;
        border: 1px solid #ddd;
        border-radius: 24px;
        &:hover{
          box-shadow: 0 2px 4px rgba(0,0,0,.18)
        }
        .placeholder-text{ 
            padding: 0 16px;
            color: #222;
            font-weight: 600;
        }
        .search-icon{
            display:flex;
            justify-content:center;
            align-items:center;
            justify-content: center;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            color: #fff;
            background-color: #ff385c;
        }
    }
    .search-detail{
         
        .tabs{
            display:flex;
            justify-content:space-between;
            align-items:center;
            .tab{
                position: relative;
                width: 64px;
                margin: 10px 16px;
                font-size: 16px;
                cursor: pointer;
                color: #fff;
            }
            .active{
                &:after{
                    content: '';
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: -5px;
                    height: 2px;
                    background-color: #fff;
                }
            }
        }
        .search-content{
                position:absolute;
                left:50%;
                transform:translateX(-50%);
                top: 60px;
                .content{
                    display: flex;
                    width: 850px;
                    height: 66px;
                    border-radius: 32px;
                    border: 1px solid #ddd;
                    background-color: #fff;
                    .search-info{
                        flex:1;
                        display:flex;
                        justify-content:center;
                        flex-direction:column;
                        border-radius: 32px;
                        padding: 0 30px;
                        position: relative;
                        &:hover{
                            background-color: #eee;
                        }
                        &::after{
                            content: '';
                            position: absolute;
                            right: 0;
                            top: 50%;
                            bottom: 0;
                            width: 1px;
                            transform: translateY(-50%);
                            background-color: #ddd;
                        }
                        &:last-child::after {
                                    content: none;
                                }
                        .search-title{
                           flex:1;
                           display:flex;
                           flex-direction:column;
                            justify-content:flex-end;
                            font-size: 12px;
                            font-weight: 800;
                            color: #222;
                        }
                        .search-desc{
                           flex:1;
                           display:flex;
                           flex-direction:column;
                           justify-content:flex-start;
                        }
                    }
                }
            }
    }

    .detail-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .detail-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-40px);
    opacity: 0;
  }

  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-40px);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(40px);
    opacity: 0;
  }

  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .bar-exit {
    opacity: 0;
  }
`