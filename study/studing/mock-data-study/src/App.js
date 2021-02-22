import Home from "./components/Home";

// function App(props) {
//   // withRouter让不是路由切换的组件也具有切换组件的三个属性
//   // 监控路由变化history.listen((link)=>{})
//   // 编程式导航 props.history.push('/xxx')
//   // 路由传参
//   // params
//   props.history.listen((link) => {
//     // console.log(link.pathname);
//   });
//   return (
//     <div>
//       <div>
//         <NavLink to="/">app</NavLink>
//         <NavLink to="/home">home</NavLink>
//         {/*动态参数*/}
//         <NavLink to="/user/user1">user1</NavLink>
//         <NavLink to="/user/user2">user2</NavLink>
//         {/*路由传参*/}
//         <NavLink
//           to={{
//             pathname: "/about",
//             search: "?name=aaa",
//           }}
//         >
//           about
//         </NavLink>
//         <button
//           onClick={() => {
//             props.history.push("/home");
//           }}
//         >
//           home
//         </button>
//       </div>
//       <Route path="/home" component={Home}></Route>
//       <Route path="/about" component={About}></Route>
//       <Route path="/user/:id" component={User1}></Route>
//       <Redirect from="/" to="/home/homea" />
//     </div>
//   );
// }

function App() {
  return <Home></Home>;
}
export default App;
