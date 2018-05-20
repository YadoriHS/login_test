import React from 'react';
import { render } from 'react-dom';
import { Router, withRouter, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
import PropTypes from 'prop-types';


import Thanks from './components/Thanks';


export default class App extends React.Component {
  onSubmit() {    
    this.context.router.push('/Thanks')
  }
  render() {
    return (
      <div class="container">
            <div class="row">
            <div class="col-md-5 mx-auto">
              <div id="first">
                <div class="myform form ">
                   <div class="logo mb-3">
                     <div class="col-md-12 text-center">
                      <h1>会員登録</h1>
                     </div>
                  </div>
                      <form action="" method="post" name="login">
                         <div class="form-group">
                            <label for="exampleInputEmail1">ログインメールアドレス</label>
                            <input type="email" name="email"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="xxx@test.com"/>
                         </div>
                         <div class="form-group">
                            <label for="exampleInputEmail1">パスワード</label>
                            <input type="password" name="password" id="password"  class="form-control" aria-describedby="emailHelp" placeholder="123456" />
                         </div>
                         <div class="form-group">
                            <label for="exampleNickname">ニックネーム</label>
                            <input type="text" name="nickname" id="nickname"  class="form-control" aria-describedby="emailHelp" placeholder="ほげほげ" />
                         </div>
                         <div class="form-group">
                            <label for="sex">性別</label>
                            <select class="form-control" id="sex">
                               <option>男性</option>
                               <option>女性</option>
                               <option>秘密</option>
                            </select>
                         </div>
                         <div class="form-group">
                            <label for="year">年代</label>
                            <select class="form-control" id="year">
                               <option>十代</option>
                               <option>二十代</option>
                               <option>三十代</option>
                               <option>四十代</option>
                               <option>五十代及び以上</option>
                            </select>
                         </div> 
                         <div class="col-md-12 text-center ">
                            <button onClick={this.onSubmit.bind('this')} class="btn btn-block mybtn btn-primary tx-tfm">登録</button>
                         </div>                       
                      </form>                 
                </div>
              </div>
            </div>
            </div>
        </div>
    );
  }
}

// App.contextTypes = {
//     router: React.PropTypes.object
// };


// render((
//   <Router history={App}>
//     <Route path="/" component={App}>
//     <Route path={'/Thanks'} component={Thanks} />
//     </Route>
//   </Router>
// ),
// document.getElementById('app'));

// export default App;
