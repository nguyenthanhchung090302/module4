
import React, { Component } from 'react';
import "./App.css"


class App extends Component {

  // phương thức khởi tạo constructor
  // phương thức khởi tạo constructor sẽ đc chạy đầu tiên
  // sau đó mới đến render()
  // ==> constructor là nơi chúng ta khai báo và setup những biến khởi tạo 
  // đầu tiên , hoặc những phương thức khởi tạo dầu tiên trc khi component dc phép render ra lần đầu tiên
  constructor(props) {
    super(props);
    this.state = {
      
    };
    // khai báo và bind từ khóa this vào trong hàm handleClick
    this.handleClick = this.handleClick.bind(this)
  }
  // phương thức render
  // dùng để render JSX ra màn hình browers
  handleClick() {
    // thay đổi state isHeads thành giá trị ngược lại
    // mỗi khi đc bấm
    this.setState({
      

    })
  }
  render() {
    // JSX - là một dạng temo late engine(gần giống html nhưng nó kp là html)
    // có thể sử dụng cú pháp javascript ở trong đó thông qua cặp ngoặc
    // {}
    return (  
      <>
      <div className='App'>
        <h1></h1>
        {/* conditional rendering */}
        {
          
        }
        
        </div>
      </>
    );
  }
}
 
export default App;

// review React
// react là gì?

// react là 1 thư viện javascript front-end giúp developers có thể phân tách
// trang wweb thành những component
// các component này có thể đc tái sử dụng và custom xuyên suotts chương trình code react

// => 1 chương trình react là tổ hợp cuả rất nhiều các component ghép lại với nhau

// Component chính là trọng điểm của react

// II. Component trong react
// trong react có 2 loại component chính
// - Class-based component(***)
// - functional component 

// (***) class-based component

// cấu trúc cơ bản của một class-based component
// 1. import React, { Component } from 'react';


// 2. class App extends Component {
//   constructor(props) {
//     super(props);
//   }
//   state = {  }
//   render() { 
//     return (  
//       <>
//       <div>hello world</div>
//       </>
//     );
//   }
// }
 
// 3. export default
// export default App;


// constructor là gì??
// render() là gì??
// JSX là gì??

// III. import và export ở trong react

// trong một file 
// export
// chỉ có thể export default 1 lần duy nhất
// có thể export bình thường nhiều lần

// import :
// có thể import trực tiếp đối với những component đc export default
// import react from"react";

// có thể import nhiều cpmponent từ 1 file không đc 
// export default
// import{ navbar, header...} from "..."


// IV. props và state trong react component

// 1. props là gì ??
// props là--> properties (thuộc tính)
// 1. component có thể đc custom và tái sử dụng thông qua vc truyền các thuộc tính vào trong nó

// 2. state là gì ???
// dịch nôm na là trạng thái 

// ở trong một trang web, thì luôn luôn tồn tại rất nhiều trạng thái (state)
// của các thành phần trên trang web

// ví dụ :
// trạng thái hiện ra/mất đi của một ô alert
// trạng thái đóng mở của một ô accordion
// trạng thái xổ xuống, hay hất lên của một menu trên navbar
// trạng thái mặt trên hay mặt dưới của một dồng xu 

// trong một trang web thì sẽ có 2 loại state (trạng thái)
// - UI state (trạng thái của giao diện)
// - business state (trạn thái liên quan đến data, hay các tác vụ liên quan đến nghiệp vụ của trang web)
// ví dụ :
// trang web đã lấy đc dữ liệu từ api hay chưa ???

// V. Event trong react
// - onClick (sự kiện click)

