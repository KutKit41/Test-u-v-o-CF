//Nhập vào một mảng các số nguyên, tìm cặp hai số liền kề có tích lớn nhất và trả về kết quả của phép nhân 2 số đó.
//Ví dụ: INPUT là [2, 3, -5, -2, 4] thì OUTPUT là 10 (cặp -5 và -2 có tích là 10)

let inputArray = [];
function adjacentElementsProduct(inputArray) {
  let output = [];
  for (let i = 0; i < inputArray.length - 1; i++) {
    output.push(inputArray[i] * inputArray[i + 1]);
  }
  return Math.max(...output);
}
//
//

//Có một nhóm người đang đứng thành một hàng, để chia ra làm 2 đội từ hàng người thì quản trò chia như sao. Người đứng thứ nhất vào Team 1, người đúng thứ hai vào Team 2, người đứng thứ ba vào lại Team 1, cứ tiếp tục như thế cho đến người cuối cùng.
//Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team.
let a = [];
function alternatingSums(a) {
  let evenArray = [];
  let oddArray = [];
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
      evenArray.push(a[i]);
    } else {
      oddArray.push(a[i]);
    }
  }
  let sumEvenArray = evenArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  let sumOddArray = oddArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  result.push(sumEvenArray);
  result.push(sumOddArray);
  return result;
}
