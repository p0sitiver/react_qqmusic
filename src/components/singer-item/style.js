import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';
// 存储

const { themeColor, searchBarColor, grayFontColor, normalColor } =
    getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE;

export const SingerItemWrapper = styled.div`
    position: relative;
    display: inline-block;
    width: 190px;
    height: 240px;
    margin: 10px 10px;
    img {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 190px;
        height: 190px;
        border-radius: 50%;
        cursor: pointer;
    }
    .name {
        position: absolute;
        left: 50%;
        bottom: 8%;
        transform: translateX(-50%);
        color: ${normalColor};
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        &:hover {
            color: ${themeColor};
        }
    }
    .info {
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        color: ${grayFontColor};
        font-size: 8px;
        cursor: default;
    }
`;
