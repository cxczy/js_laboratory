/**
 * Created by Administrator on 2017/10/10.
 */
const Utils = {
    genRandomMap: function (size = 4, is2d = false) {
        let max = size, count = 0, len = Math.pow(max, 2);
        let arr1 = Array.apply(null, Array(len)), arr2, ret;
        while (count < max) {
            let temp = Math.ceil(Math.random() * len);
            if (!arr1[temp - 1]) {
                arr1[temp - 1] = Math.random() > 0.5 ? 1 : 2;
                count++;
            }
        }
        ret = arr1;
        if (is2d) {
            arr2 = [];
            for (let i = 0; i < size; i++) {
                if (!arr2[i]) arr2[i] = [];
                for (let j = 0; j < size; j++) {
                    arr2[i][j] = arr1[i * size + j]
                }
            }
            ret = arr2;
        }
        return ret
    }
}