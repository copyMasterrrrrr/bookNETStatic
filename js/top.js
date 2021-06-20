// 定义名为 todo-item 的新组件
Vue.component('top', {
  template: `    <div id="header">
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <span class="navbar-brand">SSSSS</span>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li><a href="#">首页</a></li>
                </ul>
                <form class="navbar-form navbar-left">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Search">
                    </div>
                    <button type="submit" class="btn btn-default">搜索</button>
                </form>
                <ul class="nav navbar-nav navbar-right">
                    <li><span class="navbar-brand">{{username}}</span></li>
                    <li><a href="#" @click="quit">注销</a></li>
                </ul>
            </div>
        </div>
    </nav>
</div>`,
props:['username'],
  data() {
    return {
      
    }
  },
  methods: {
    quit() {
      if (localStorage.getItem("token") == null) {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("username");
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("username")
      }
      window.location.href="/html/index.html"
    }
  }
})

