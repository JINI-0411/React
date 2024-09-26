// 1. spread 연산자
// 1) 문자열일때 사용
const spreadArray = [..."coffee"];

// "coffee".split("")
/// 이걸 쉽게 변경할려면
// [..."coffee"] /// 하면 나눠짐

// 2) rest
const fruits = ["apple", "orange", "kiwi", "grape"];

const [first, second] = fruits; //  apple, orange
const [a, ...b] = fruits; // apple, ["orange", "kiwi", "grape"]

// 퀴즈 -> ice_americano -> i aa
// const [ice, coffee] = "ice_americano".split("_"); // 인덱스가 아니라 각각에 하나씩 담기는거
// const [i] = [...ice];
// const [aa] = [...coffee];

// 1. 오브젝트일때
const person = { name: "차은우", age: 28, agency: "판타지오" };

// const char = person.name 변형
const { name, ...other } = person; // name:차은우 other {age:28, agency: "판타지오"}

const son = { name: "손흥민", position: "윙" };
const tottham = { club: "토트넘", number: 7 };
const korea = { nation: "대한민국", number: 10 };

const a0 = { son, tottham }; // { { name: "손흥민", position: "윙" }, { club: "토트넘", number: 7 } }
const a1 = { ...son, ...tottham }; // { name: "손흥민", position: "윙", club: "토트넘", number: 7 }
const a2 = { ...son, ...korea }; // { name: "손흥민", position: "윙", nation: "대한민국", number: 10 }






const coffeeName : "아메리카노"
const coffeeShots :2

// k값과 v값이 같으면 한 단어 가능
const coffee1 = {
    coffeeName,
    coffeeShots,
}