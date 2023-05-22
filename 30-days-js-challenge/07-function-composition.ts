// * functions 내의 함수 리스트 합성하여 결과 처리
// * 역순으로 호출하여 처리하여야 함. (stack 구조)

type F = (x: number) => number;

function compose(functions: F[]): F {
	return function(x) {
        let pop = functions.pop();
        let result = x;

        while (pop) {
            result = pop(result);
            pop = functions.pop();
        }

        return result;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

export {};