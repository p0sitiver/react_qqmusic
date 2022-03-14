const { default: styled } = require('styled-components');

export const BannerWrapper = styled.div`
    height: 260px;
    /* display: flex; */
    position: relative;
    .content {
        /* position: relative; */
        display: flex !important;
        /* 设置主轴排序方式 */
        justify-content: space-between;
        /* justify-content:space-around; */
        /* 设置侧轴排序方式 */
        /* align-items: center; */
        /* height: 186px; */
        margin-top: 20px;

        /* background-color: #f5f5f5; */
        width: 100%;
        /* height: 270px; */
        .banner_img {
            display: flex;
            align-items: center;
            /* margin: 0 25px; */
            width: 530px;
            border-radius: 20px;
        }
    }
    .slick-dots {
        position: absolute;
        bottom: -30px !important;
        button {
            width: 10px !important;
            height: 10px !important;
            border-radius: 50% !important;
            background-color: #3f3f3f !important;
        }
    }
    /* overflow:scroll;
    overflow-x:hidden */
`;
export const BannerControl = styled.div`
    /* overflow:auto; */

    position: absolute;
    left: 0;
    right: 0;
    top: 35%;
    transform: translateY(-50%);
    .btn {
        position: absolute;
        background-color: transparent;
        cursor: pointer;
        span {
            font-size: 40px;
            /* font-weight: 100 !important; */
            visibility: hidden;
            
        }
        &:hover span {
            color: #00cd98;
            visibility: visible;
            /* font-weight: 100 !important; */
        }
        &:nth-child(1) {
            left: -50px;
            span:nth-child(1) {
                display: inline-block;
                -moz-transform: scaleX(-1);
                -webkit-transform: scaleX(-1);
                -o-transform: scaleX(-1);
                transform: scaleX(-1);
            }
            
        }
        &:nth-child(2) {
            right: -50px;
        }
    }
`;
