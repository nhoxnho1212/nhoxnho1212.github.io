var app1 = new Vue({
    el: '#app-1',
    data: {
      msg: "Hello Lampart",
      codeHTML: `
<div id="#app">
    <p>Hello {{ msg }}</p>
</div>`,
      codeJS: `
new Vue({
    el: "#app";
    data: {
        msg: "Lampart"
    }
});`
    },    
    methods: {
        openModal: function() {
            Event.$emit('openModal', this.codeHTML, this.codeJS)
        }
    }
    
  });


var app2 = new Vue({
    el:'#app-2',
    data:{
        soa: null,
        sob: null,
        codeJS: `
new Vue({
    el:'#app',
    data:{
        soa: null,
        sob: null
    },
    methods:{
        tinhtong:function(a,b){
            return (a==null || b==null)?0:parseInt(a)+parseInt(b);
        }
    }
})
        `,
        codeHTML: `
<div id="app">
    <form action="">
        <input v-model="soa" type="number" name="soa" placeholder="Số a"  />
        <input v-model="sob" type="number" name="sob" placeholder="Số b" />
        <p>
            <b>Kết quả a + b: </b>
            {{ tinhtong(soa,sob) }}
        </p>
    </form>
</div>
        `
    },
    methods:{
        tinhtong:function(a,b){
            return (a==null || b==null)?0:parseInt(a)+parseInt(b);
        },
        openModal: function() {
            Event.$emit('openModal', this.codeHTML, this.codeJS)
        }
        
    }
})

var app3 = new Vue({
    el:'#app-3',
    data:{
        time:null,
        codeHTML: `
<div id="app">
    <p>
        <b>Giờ hiện tại:</b>
        {{ time }}
    </p>
    <button v-on:click="getDate" >
        Lấy giờ hiện tại
    </button>
</div>
        `,
        codeJS: `
new Vue({
    el:'#app',
    data:{
        time:null,
    },
    methods:{
        getDate(){
            const today = new Date();
            this.time = today.toLocaleTimeString() + " "+ today.toLocaleDateString();
        },
    }
})`
    },
    methods:{
        getDate(){
            const today = new Date();
            this.time = today.toLocaleTimeString() + " "+ today.toLocaleDateString();
        },
        openModal: function() {
            Event.$emit('openModal', this.codeHTML, this.codeJS)
        }
    }
})

var app4 = new Vue({
    el:'#app-4',
    data:{
        time:null,
        codeHTML: `
<div id="app">
    <p>
        <b>Giờ hiện tại:</b>
        <span v-once>{{ time }}</span>
    </p>
    <button v-on:click="getDate" >
        Lấy giờ hiện tại
    </button>
</div>
        `,
        codeJS: `
new Vue({
    el:'#app',
    data:{
        time:null,
    },
    methods:{
        getDate(){
            const today = new Date();
            this.time = today.toLocaleTimeString() + " "+ today.toLocaleDateString();
        },
    }
})`
    },
    methods:{
        getDate(){
            const today = new Date();
            this.time = today.toLocaleTimeString() + " "+ today.toLocaleDateString();
        },
        openModal: function() {
            Event.$emit('openModal', this.codeHTML, this.codeJS)
        }
        
    }
})

var app5 = new Vue({
    el:'#app-5',
    data:{
        rawHTML: "<h1>Hello Lampart</h1>",
        codeJS: `
new Vue({
    el:'#app',
    data:{
        rawHTML: "<h1>Hello Lampart</h1>",
    },
})
        `,
        codeHTML: `
<div id="app">
    <p>Raw HTML: 
        {{ rawHTML }}
    </p>
    <p>V-HTML: 
        <span v-html="rawHTML"></span>
    </p>
</div>
        `
    },
    methods: {
        openModal: function() {
            Event.$emit('openModal', this.codeHTML, this.codeJS)
        }
    }

})

var app6 = new Vue({
    el:'#app-6',
    data:{
        isButtonDisable:true,
        codeJS: `
new Vue({
    el:'#app',
    data:{
        isButtonDisable:true,
    },
    methods:{
        clickfunc(){
            if(this.isButtonDisable==true)
            {
                this.isButtonDisable=false;
            }
            else{
                this.isButtonDisable = true;
            }
        }
    }
})
        `,
        codeHTML: `
<div id="app">
    <p>Gia trị của isButtonDisable: {{ isButtonDisable }}</p>
    <button v-on:click="clickfunc">Kích hoạt</button>
    <button v-bind:disabled="isButtonDisable">Click</button>
</div>
        `
    },
    methods:{
        clickfunc(){
            if(this.isButtonDisable==true)
            {
                this.isButtonDisable=false;
            }
            else{
                this.isButtonDisable = true;
            }
        },
        openModal: function() {
            Event.$emit('openModal', this.codeHTML, this.codeJS)
        }
    }
})

var app7 = new Vue({
    el:'#app-7',
    data:{
        nam:0,
        can:null,
        chi:null,
        tuoi:0,
    },
    computed:{
        tinhcan:function(){
            const curYear = new Date();
            this.tuoi = parseInt(curYear.getFullYear())-parseInt(this.nam)+1;
            if(this.nam>=1000 && this.nam <=9999)
            {
           
                var a = parseInt(this.nam)%10;
             
                switch(a)
                {
                    case 0:{
                        this.can="Canh";
                        break;
                    }
                    case 1:{
                        this.can="Tân";
                        break;
                    }
                    case 2:{
                        this.can="Nhâm";
                        break;
                    }
                    case 3:{
                        this.can="Quý";
                        break;
                    }
                    case 4:{
                        this.can="Giáp";
                        break;
                    }
                    case 5:{
                        this.can="Ất";
                        break;
                    }
                    case 6:{
                        this.can="Bính";
                        break;
                    }
                    case 7:{
                        this.can="Đinh";
                        break;
                    }
                    case 8:{
                        this.can="Mậu";
                        break;
                    }
                    case 9:{
                        this.can="Kỷ";
                        break;
                    }
                }
                
                
              
                b = parseInt(this.nam)%12;
              
                switch(b)
                {
                    case 4:{
                        this.chi="Tý";
                        break;
                    }
                    case 5:{
                        this.chi="Sửu";
                        break;
                    }
                    case 6:{
                        this.chi="Dần";
                        break;
                    }
                    case 7:{
                        this.chi="Mão";
                        break;
                    }
                    case 8:{
                        this.chi="Thìn";
                        break;
                    }
                    case 9:{
                        this.chi="Tỵ";
                        break;
                    }
                    case 10:{
                        this.chi="Ngọ";
                        break;
                    }
                    case 11:{
                        this.chi="Mùi";
                        break;
                    }
                    case 0:{
                        this.chi="Thân";
                        break;
                    }
                    case 1:{
                        this.chi="Dậu";
                        break;
                    }
                    case 2:{
                        this.chi="Tuất";
                        break;
                    }
                    case 3:{
                        this.chi="Hợi";
                        break;
                    }
                }
                
                return this.can + " " + this.chi + " ("+this.tuoi+" tuổi)";
            }
            return "";
        }
        
    }
})


var app8 = new Vue({
  el: '#app-8',
  data: {
    question: '',
    answer: 'Không thể trả lời nếu bạn chưa đặt câu hỏi!'
  },
  watch: {
    // bất cứ lúc nào câu hỏi thay đổi, hàm bên dưới sẽ chạy
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Đang chờ bạn đặt xong câu hỏi...'
      this.getAnswer()
    }
  },
  methods: {
    // _.debounce là một hàm do Lodash cung cấp
    // Để tìm hiểu rõ hơn cách hoạt động của hàm này,
    // bạn có thể truy cập: https://lodash.com/docs#debounce 
    getAnswer: _.debounce(
      function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Câu hỏi thì thường chứa một dấu "?" ;-)'
          return
        }
        this.answer = 'Đang suy nghĩ...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Lỗi! Không thể truy cập API. ' + error
          })
      },
      // Đây là thời gian (đơn vị mili giây) chúng ta đợi người dùng dừng gõ.
      500
    )
  }
})

var app9 = new Vue({
    el:"#app-9",
    data:{
        tienhientai:5000,
        tiencuoc:0,
        choose:"",
        ketqua:"",
        isdisable:false,
        thongbao:"",
        luutru:["1.png","2.png","3.png","4.png","5.png","6.png"],
        hinh:""
    },
   
    methods:{
        async lac(){
           
            if(this.tiencuoc>this.tienhientai || this.tiencuoc <=0)
            {
                this.ketqua = "Lỗi";
            }
            else{
            for(i=5;i<600;i=i+10)
            {
                var bienhinh = Math.floor(Math.random()*6);
                this.hinh ="img/"+ this.luutru[bienhinh];
              
                await this.sleep(75);
            }
            var salac = Math.floor(Math.random() * 6)+1;
            this.choose=parseInt(this.choose);
            salac=parseInt(salac);
            if(salac%2===0)
            {
               
                if(this.choose===0)
                {
                 
                    this.tienhientai = parseInt(this.tienhientai)+ parseInt(this.tiencuoc);
                }
                else{
                    this.tienhientai=parseInt(this.tienhientai)- parseInt(this.tiencuoc);
                }
            }
            else{
                
                if(this.choose===1)
                {
                    this.tienhientai=parseInt(this.tienhientai)+ parseInt(this.tiencuoc);
                }
                else{

                    this.tienhientai = parseInt(this.tienhientai)-parseInt(this.tiencuoc);
                }
            }
            this.ketqua = salac;this.hinh ="img/"+ this.luutru[this.ketqua-1];}
            
            
            if(this.tienhientai===0)
            {
                this.isdisable=true;
                this.ketqua = this.ketqua + " ";
                this.thongbao="<h5 style='color:red'>Bạn đã hết tiền rồi</h5>";
            }
            else if(this.tienhientai>=20000)
            {
                this.isdisable=true;
                this.ketqua = this.ketqua + " ";
                this.thongbao="<h5 style='color:blue'>Bạn thắng rồi</h5>";
            }
        },
        sleep(ms) {
        
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    }
})

Vue.component('todo-item', {
    template: '\
      <li style="margin-bottom:10px">\
        {{ title }}\
        <button style ="border-radius:50px" class="btn btn-danger" v-on:click="$emit(\'remove\')"> <span aria-hidden="true">&times;</span></button>\
      </li>\
    ',
    props: ['title']
  })
  
  new Vue({
    el: '#todo-list-example',
    data: {
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Review VueJS',
        },
        {
          id: 2,
          title: 'Review Vuetify',
        },
        {
          id: 3,
          title: 'Review Laravel'
        },
        {
          id: 4,
          title: 'Báo cáo tiến độ'
        }
      ],
      nextTodoId: 5
    },
    methods: {
      addNewTodo: function () {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      }
    }
  })

  Vue.component('lp-button',{

      data:function(){
          return {
              dasac:{
                marginTop:'10px',
                backgroundColor:'#00000',
                color:'#00000'
              },
              count:0,
              rgb:null,
              cautruc:null,
          }
      },
      methods:{
          doimau:function(){
              this.count++;
              numberhex = (Math.random()*0xFFFFFF<<0).toString(16);
              r=numberhex.slice(0,2);
              r = "0x"+r;
              r=parseInt(r);
              g=numberhex.slice(2,4);
              g = "0x"+g;
              g=parseInt(g);
              b=numberhex.slice(4,6);
              b = "0x"+b;
              b=parseInt(b);
              this.rgb = "(" + r +", " + g + ", " +b + ")";
              Y = Math.sqrt(0.299*(r*r)+0.587*(g*g)+0.114*(b*b));
              if(Y>127.5){
                  this.cautruc = "Màu sáng";
                  this.dasac.color = "#000000"
              }else{
                  this.cautruc = "Màu tối";
                  this.dasac.color = "#ffffff"
              }
              this.dasac.backgroundColor="#"+ numberhex;
          }
      },
      template:"<button value='lp-button' v-on:click='doimau' class='description btn btn-primary' v-bind:style='dasac'>{{count}} - Mã màu: {{dasac.backgroundColor}} {{rgb}} <br> Loại màu: {{cautruc}}</button>"
  })

  var app11 = new Vue({
      el:"#app-11",
      data: {
          codeHTML: `<lb-button></lb-button>`,
          codeJS: `
Vue.component('lp-button',{

    data:function(){
        return {
            dasac:{
                marginTop:'10px',
                backgroundColor:'#00000',
                color:'#00000'
            },
            count:0,
            rgb:null,
            cautruc:null,
        }
    },
    methods:{
        doimau:function(){
            this.count++;
            numberhex = (Math.random()*0xFFFFFF<<0).toString(16);
            r=numberhex.slice(0,2);
            r = "0x"+r;
            r=parseInt(r);
            g=numberhex.slice(2,4);
            g = "0x"+g;
            g=parseInt(g);
            b=numberhex.slice(4,6);
            b = "0x"+b;
            b=parseInt(b);
            this.rgb = "(" + r +", " + g + ", " +b + ")";
            Y = Math.sqrt(0.299*(r*r)+0.587*(g*g)+0.114*(b*b));
            if(Y>127.5){
                this.cautruc = "Màu sáng";
                this.dasac.color = "#000000"
            }else{
                this.cautruc = "Màu tối";
                this.dasac.color = "#ffffff"
            }
            this.dasac.backgroundColor="#"+ numberhex;
        }
    },
    template:"<button value='lp-button' v-on:click='doimau' class='description btn btn-primary' v-bind:style='dasac'>{{count}} - Mã màu: {{dasac.backgroundColor}} {{rgb}} <br> Loại màu: {{cautruc}}</button>"
})
`
      },
      methods: {
        openModal: function() {
            Event.$emit('openModal', this.codeHTML, this.codeJS)
        } 
      }
  })

Vue.component('datablog',{
    props:['title'],
    template: '<h3>{{title}}</h3>'
})

Vue.component('lp-header',{
    props:['dataheader','stylemin'],
    template:'<h3 :style="stylemin">{{dataheader}}</h3>'
})

var app12 = new Vue({
    el:"#app-12",
    data:{
        mamau:null,
        text:null,
        styleapp:null,
        codeHTML_vd3: `
<datablog title="Công ty Lampart"></datablog>
<datablog title="Giới thiệu về Vue"></datablog>
<datablog title="Giới thiệu về VueJS"></datablog>
        `,
        codeJS_vd3: `
Vue.component('datablog',{
    props:['title'],
    template: '<h3>{{title}}</h3>'
}
        `,
        codeHTML_vd4: `
<div id="app">
    <p>Nhập mã màu và chuỗi kí tự từ bàn phím</p>
    <input v-model="mamau" type="text" name="mamau" placeholder="Nhập mã màu"/>
    <input v-model="text" type="text" name="text" placeholder="Nhập chuỗi"/>
    <p>KẾT QUẢ</p>
    <lp-header v-bind:dataheader="text" v-bind:stylemin="styleapp"></lp-header>
<div>
        `,
        codeJS_vd4: `
new Vue({
    el:"#app",
    data:{
        mamau:null,
        text:null,
        styleapp:null,
    },
    watch: {
        // bất cứ lúc nào câu hỏi thay đổi, hàm bên dưới sẽ chạy
        mamau: function (newMamau, oldMamau) {
          this.getMau();
        }
    },
    computed:{
        getBonus(){
            return "color:"+"#"+this.mamau
        }
    },
    methods: {
    getMau: _.debounce(
        function () {
        this.styleapp = "color:"+"#"+this.mamau
        },
        // Đây là thời gian (đơn vị mili giây) chúng ta đợi người dùng dừng gõ.
        500
        ),
    }
})
        `

    },
    watch: {
        // bất cứ lúc nào câu hỏi thay đổi, hàm bên dưới sẽ chạy
        mamau: function (newMamau, oldMamau) {
        
          this.getMau();
        }
      },
      computed:{
        getBonus(){
            return "color:"+"#"+this.mamau
        }
      },
      methods: {
        getMau: _.debounce(
            function () {
            this.styleapp = "color:"+"#"+this.mamau
            },
            // Đây là thời gian (đơn vị mili giây) chúng ta đợi người dùng dừng gõ.
            500
          ),
        openModal: function(codeHTML, codeJS) {
            Event.$emit('openModal', codeHTML, codeJS)
        } 
      }
})


Vue.component('lp-error',{
    template:'<h1>1. HelloWorld</h1> <h2>1. HelloLampart</h2>'
})

Vue.component('lp-success',{
    template:'<div class="lp-success"><h1>2. HelloWorld</h1> <h2>2. HelloLampart</h2></div>'
})

Vue.component('custom-input', {
    props: ['value'],
    template: `
      <input class="form-control"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
>
    `
  })

Vue.component('blog-post', {
    props: ['post'],
    template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button class="btn btn-primary" v-on:click="$emit('enlarge-text')">
        Phóng to
      </button>
      <div v-html="post.content"></div>
    </div>
  `
  })

  Vue.component('blog-posts', {
    props: ['post'],
    template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button class="btn btn-primary" v-on:click="$emit('enlarge-text', 0.3)">
        Phóng to
      </button>
      <div v-html="post.content"></div>
    </div>
  `
  })

  Vue.component('alert-box', {
    template: `
      <div class="alert alert-success">
        <strong>Lỗi!</strong>
        <slot></slot>
      </div>
    `
  })
  
var app13 = new Vue({
    el:"#app-13",
    data: {
        codeJS_error: `
Vue.component('lp-error',{
    template:\`
    <h1>1. HelloWorld</h1> 
    <h2>1. HelloLampart</h2>\`
})
        `,
        codeJS_success: `
Vue.component('lp-success',{
    template:\`
    <div class="lp-success">
        <h1>2. HelloWorld</h1>
        <h2>2. HelloLampart</h2>
    </div>\`
})
`,
codeHTML_error: "<lp-error></lp-error>",
codeHTML_success: "<lp-success></lp-success>",
},
methods: {
        openModal: function(codeHTML, codeJS) {
            Event.$emit('openModal', codeHTML, codeJS)
        } 
    }
})

var app14 = new Vue({
    el:"#app-14",
    data:{
        posts:[
            {id:1, title:'Giới thiệu về Vue', content:'Hello'},
            {id:2, title:'Giới thiệu về Vuetify', content:'Hello'},
            {id:3, title:'Giới thiệu về Laravel', content:'Hello'}
        ],
        postFontSize:1,
        postFontSize2:1
        ,
        codeHTML_vd6 : `
<div id="app">
    <div :style="{ fontSize: postFontSize + 'em' }">
        <p>Hello</p>
        <blog-post
            v-for="post in posts"
            v-bind:key="post.id"
            v-bind:post="post"
            v-on:enlarge-text="postFontSize += 0.1"
        ></blog-post>
    </div>
</div>
        `,
        codeJS_vd6: `
Vue.component('blog-post', {
    props: ['post'],
    template: \`
    <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <button class="btn btn-primary" v-on:click="$emit('enlarge-text')">
        Phóng to
        </button>
        <div v-html="post.content"></div>
    </div>
    \`
})

new Vue({
    el:"#app",
    data:{
        posts:[
            {id:1, title:'Giới thiệu về Vue', content:'Hello'},
            {id:2, title:'Giới thiệu về Vuetify', content:'Hello'},
            {id:3, title:'Giới thiệu về Laravel', content:'Hello'}
        ],
        postFontSize:1,
        postFontSize2:1
    }
})
        `,
        codeHTML_vd7: `
<div id="app">
    <div :style="{ fontSize: postFontSize2 + 'em' }">
        <p>Hello</p>
        <blog-posts
            v-for="post in posts"
            v-bind:key="post.id"
            v-bind:post="post"
            v-on:enlarge-text="postFontSize2 += $event"
        ></blog-posts>
    </div>
</div>
        `,
        codeJS_vd7: `
Vue.component('blog-posts', {
    props: ['post'],
    template: \`
    <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <button class="btn btn-primary" v-on:click="$emit('enlarge-text', 0.3)">
        Phóng to
        </button>
        <div v-html="post.content"></div>
    </div>
   \`
})

new Vue({
    el:"#app",
    data:{
        posts:[
            {id:1, title:'Giới thiệu về Vue', content:'Hello'},
            {id:2, title:'Giới thiệu về Vuetify', content:'Hello'},
            {id:3, title:'Giới thiệu về Laravel', content:'Hello'}
        ],
        postFontSize:1,
        postFontSize2:1
    }
})
        `,
    },
    methods: {
        openModal: function(codeHTML,codeJS) {
            Event.$emit('openModal', codeHTML, codeJS)
        } 
    }
})

var app15 = new Vue({
    el:"#app-15",
    data:{
        msg:"Thông báo ban đầu",
        codeHTML_1: `
<div id="app">
    <input v-model="msg">
</div>
        `,
        codeJS_1: `
new Vue({
    el:"#app",
    data:{
        msg:"Thông báo ban đầu"
    }
})
        `,
        codeHTML_2: `
<div id="app">
    <input
        v-bind:value="msg"
        v-on:input="msg=$event.target.value"
    >
</div>
        `,
        codeJS_2: `
new Vue({
    el:"#app",
    data:{
        msg:"Thông báo ban đầu"
    }
})
        `,
        codeHTML_3: `
<div id="app">
    <custom-input v-model="msg"></custom-input>
</div>
        `,
        codeJS_3: `
new Vue({
    el:"#app",
    data:{
        msg:"Thông báo ban đầu"
    }
})

Vue.component('custom-input', {
    props: ['value'],
    template: \`
    <input
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
    >
    \`
}
        `,
    },
    methods: {
        openModal: function(codeHTML,codeJS) {
            Event.$emit('openModal', codeHTML, codeJS)
        } 
    }
})

Vue.component('alert-box-name', {
template: `
    <div class="container">
        <div class="alert alert-success">
            <strong>Success: </strong>
            <slot name="success"></slot>
        </div>
        <div class="alert alert-danger">
            <strong>Danger: </strong>
            <slot name="danger"></slot>
        </div>
    </div>
`
})

var app16 = new Vue({
    el:"#app-16",
    data: {
        codeJS_1: `
Vue.component('alert-box', {
    template: \`
        <div>
            <strong>Lỗi!</strong>
            <slot></slot>
        </div>
    \`
})
    `,
    codeHTML_1: `
<alert-box>
    Hello World
</alert-box>
    `,
        codeJS_2: `
Vue.component('alert-box-name', {
template: \`
    <div class="container">
        <div class="alert alert-success">
            <strong>Success: </strong>
            <slot name="success"></slot>
        </div>
        <div class="alert alert-danger">
            <strong>Danger: </strong>
            <slot name="danger"></slot>
        </div>
    </div>
\`
})
    `,
    codeHTML_2: `
<alert-box-name>
    <div slot="success">
        <p>This is success alert</p>
    </div>
    <div slot="danger">
        <p>This is danger alert</p>
    </div>
</alert-box-name>
    `,
    },
    methods: {
        openModal: function(codeHTML, codeJS) {
            Event.$emit('openModal', codeHTML, codeJS)
        } 
    }

})


var transitionapp1 = new Vue({
    el:"#transition-app1",
    data: {
        show: true,
        codeHTML: `
<div id="app">
    <button v-on:click="show = !show"> 
        Toggle
    </button>
    <transition name="fade">
        <p v-if="show">HELLO LAMPART</p>
    </transition>
</div>
        `,
        codeJS: `
new Vue({
    el:"#app",
    data: {
        show: true,
    },
});
        `,
        codeCSS: `
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
`
    },
    methods: {
        openModal: function() {
            Event.$emit('openModal', this.codeHTML, this.codeJS, this.codeCSS)
        }
    }
});



Vue.component('modal', {
    template: '#modal-template',
})

window.Event = new Vue();

new Vue({
    el:"#modal-cus",
    data: {
        showModal: false,
        codeHTML: "",
        codeJS: "",
        codeCSS: ""
    },
    updated: function() {
        Prism.highlightAll();
    },
    methods: {
        openModal: function() {
            this.showModal = true
        },
        closeModal: function() {
            this.showModal = false;
        },
        getClass: function(codeHTML, codeJS, codeCSS) {
            let gridSize = 12;
            let returnClass = "col-sm-"
            let numObj = 0;

            if (codeCSS) {
                numObj ++;
            }
            if (codeHTML) {
                numObj ++;
            }
            if (codeJS) {
                numObj ++;
            }

            return returnClass + gridSize/numObj;
        }
    },
    mounted() {
        Event.$on('openModal', (codeHTML, codeJS, codeCSS) => {
            this.openModal();
            this.codeHTML = codeHTML;
            this.codeJS = codeJS;
            this.codeCSS = codeCSS;
        })
    },
})

// Instance example
var obj = {
    fname: 'hai',
    lname: 'nam'
}
var vm = new Vue({
    data: obj
});

console.log(vm.fname);
console.log(vm.$data);
console.log(vm.$data.fname);

// Slot Example about render scope

Vue.component('get-com', {
    data: function() {
        return {
            com: {
                name: "Lampart",
                region: "vn"
            }
        }
    },
    template: `
    <div class="alert alert-success">
        <strong>Công ty: </strong>
        <slot v-bind:com="com"></slot>
    </div>
    `
})

new Vue({
    el:"#app-slot-render_scope",
    data: {
        codeHTML: `
<div id="app">
    <get-com v-slot="{com}">
        {{com.name}}
    </get-com>
</div>
        `,
        codeJS: `
Vue.component('get-com', {
    data: function() {
        return {
            com: {
                name: "Lampart",
                region: "vn"
            }
        }
    },
    template: \`
    <div class="alert alert-success">
        <strong>Công ty: </strong>
        <slot v-bind:com="com"></slot>
    </div>
    \`
})        

new Vue({
    el: "#app"
})
        `
    },
    methods: {
        openModal: function() {
            Event.$emit('openModal', this.codeHTML, this.codeJS)
        } 
    }
})

new Vue({
    el: '#example-1',
    data: {
      show: true,
      codeHTML: `
<div id="example-1">
    <button @click="show = !show" class="btn btn-primary">
    Kích hoạt
    </button>
    <transition name="slide-fade">
        <p v-if="show">Xin chào</p>
    </transition>
</div>
      `,
      codeJS: `
new Vue({
    el: '#example-1',
    data: {
        show: true
    }
})
      `,
      codeCSS: `
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* Trước 2.1.8 thì dùng .slide-fade-leave-active */ {
  transform: translateX(10px);
  opacity: 0;
}
      `
    },
    methods: {
        openModal: function(codeHTML, codeJS, codeCSS) {
            Event.$emit('openModal', codeHTML, codeJS, codeCSS )
        } 
    }
  })

new Vue({
    el: '#example-2',
    data: {
        show: true,
        codeHTML: `
<div id="example-2">
    <button @click="show = !show" class="btn btn-primary">Kích hoạt</button>
    <transition name="bounce">
    <p v-if="show">Cân đẩu vân</p>
    </transition>
</div>
        `,
        codeJS: `
new Vue({
    el: '#example-2',
    data: {
        show: true,
    }
})
        `,
        codeCSS: `
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
        `,    
    },
    methods: {
        openModal: function(codeHTML, codeJS, codeCSS) {
            Event.$emit('openModal', codeHTML, codeJS, codeCSS )
        } 
    }
  })

// Mixins
var helloFromMixinData = {
    data: {
        msg: "Hello from Mixins"
    }
}

new Vue({
    el: "#app-mixins-1",
    mixins: [helloFromMixinData],
    data: {
        codeHTML: `
<div id="app">
    <h2> {{ msg }} </h1>
</div>
        `,
        codeJS: `
var helloFromMixinData = {
    data: {
        msg: "Hello from Mixins"
    }
}

new Vue({
    el: "#app",
    mixins: [helloFromMixinData],
}
        `
    },
    methods: {
        openModal: function() {
            Event.$emit('openModal', this.codeHTML, this.codeJS, this.codeCSS )
        }
    } 

})

var mixin_2 = {
    data: {
        dt: {
            msg_mixin: 'mixin',
            msg: 'This is message in Mixin'
        }
    },
}

new Vue({
    el: "#app-mixins-2",
    mixins: [mixin_2],
    data: {
        dt: {
            msg: 'This is message in component',
            msg_component: 'component'
        },
        codeHTML: `
<div id="app">
    {{ dt }}
</div>
        `,
        codeJS: `
var mixin_2 = {
    data: {
        dt: {
            msg_mixin: 'mixin',
            msg: 'This is message in Mixin'
        }
    },
}

new Vue({
    el: "#app",
    mixins: [mixin_2],
    data: {
        dt: {
            msg: 'This is message in component',
            msg_component: 'component'
        },
    }
})
        `
    },
    methods: {
        openModal: function() {
            Event.$emit('openModal', this.codeHTML, this.codeJS)
        }
    } 
})

var mixin_3 = {
    created: function () {
        console.log('This is created() method in mixin !')
    }
}

new Vue({
    el: "#app-mixins-3",
    mixins: [mixin_3],
    data: {
        codeJS: `
var mixin_3 = {
    created: function () {
        console.log('This is created() method in mixin !')
    }
}

new Vue({
    mixins: [mixin_3],
    created: function () {
        console.log('This is created() method in component !')
    }
})
        `
    },
    created: function () {
        console.log('This is created() method in component !')
    },
    methods: {
        openModal: function() {
            Event.$emit('openModal', null, this.codeJS )
        }
    } 
})



new Vue({
    el: '#example-3',
    data: {
      show: true
    }
  })


// Render function
Vue.component("variable-heading", {
  template: "#variable-heading-template",
  props: {
    size: {
      type: Number,
      required: true
    }
  }
});
new Vue({
    el: "#app-render-function-1",
    data: {
        codeHTML: `
<script type="text/x-template" id="variable-heading-template">
    <h1 v-if="size === 1">
    <slot></slot>
    </h1>
    <h2 v-else-if="size === 2">
    <slot></slot>
    </h2>
    <h3 v-else-if="size === 3">
    <slot></slot>
    </h3>
    <h4 v-else-if="size === 4">
    <slot></slot>
    </h4>
    <h5 v-else-if="size === 5">
    <slot></slot>
    </h5>
</script>

<div id="app">
    <variable-heading :size="1">Heading 1</variable-heading>
    <variable-heading :size="2">Heading 2</variable-heading>
    <variable-heading :size="3">Heading 3</variable-heading>
    <variable-heading :size="4">Heading 4</variable-heading>
</div>
        `,
        codeJS: `
Vue.component("variable-heading", {
  template: "#variable-heading-template",
  props: {
    size: {
      type: Number,
      required: true
    }
  }
})

new Vue({
    el: "#app"
})
        `
},
    methods: {
        openModal: function() {
            Event.$emit('openModal', this.codeHTML, this.codeJS )
        }
    }
});

// Virtual DOM
Vue.component("virtual-dom-example", {
  data() {
    return { msg: "hello render function" };
  },
  render(createElement) {
    return createElement("h2", this.msg);
  }
});

new Vue({
    el:"#app-virtual-dom",
    data : {
        codeHTML: `
<virtual-dom-example/>
        `,
        codeJS: `
Vue.component("virtual-dom-example", {
  data() {
    return { msg: "hello render function" };
  },
  render(createElement) {
    return createElement("h2", this.msg);
  }
});
        `
    },
    methods: {
        openModal: function() {
            Event.$emit('openModal', this.codeHTML, this.codeJS )
        }
    }
})

var addStudentMethod = () => {
    Vue.set(app_ri.nextTodoId, app_ri.nextTodoId++)
}


Vue.component('student-item', {
    template: '\
      <li style="margin-bottom:10px">\
        {{ title }}\
        <button style ="border-radius:50px" class="btn btn-danger" v-on:click="$emit(\'remove\')"> <span aria-hidden="true">&times;</span></button>\
      </li>\
    ',
    props: ['title']
})

var listStudent = [
        {
          id: 1,
          title: 'Tran Do Dai Phong',
        },
        {
          id: 2,
          title: 'Do Nguyen Thanh Tung',
        },
        {
          id: 3,
          title: 'Le Van Tan'
        },
        {
          id: 4,
          title: 'Nguyen Minh Nhut'
        }
      ]


var app_ri = new Vue({
    el: '#app-reactive-interface',
    data: {
      newStudent: "",
      students: listStudent,
      nextTodoId: 5,
      codeHTML: `
<div id="app-reactive-interface">
    <div class="form-group col-lg-6 form-check-inline">
    <input class="form-control" v-model="newStudent" v-on:keyup.enter="addNewTodo"
        placeholder="Thêm nhân viên">
    </div>
    <ul>
    <li is="student-item" v-for="(student, index) in students" v-bind:key="student.id" v-bind:title="student.title"
        v-on:remove="deleleStudent(index)"></li>
    </ul>
</div>
      `,
      codeJS: `
var addStudentMethod = () => {
    Vue.set(app_ri.nextTodoId, app_ri.nextTodoId++)
}


Vue.component('student-item', {
    template: '\
      <li style="margin-bottom:10px">\
        {{ title }}\
        <button style ="border-radius:50px" class="btn btn-danger" v-on:click="$emit(\'remove\')"> <span aria-hidden="true">&times;</span></button>\
      </li>\
    ',
    props: ['title']
})

var listStudent = [
        {
          id: 1,
          title: 'Tran Do Dai Phong',
        },
        {
          id: 2,
          title: 'Do Nguyen Thanh Tung',
        },
        {
          id: 3,
          title: 'Le Van Tan'
        },
        {
          id: 4,
          title: 'Nguyen Minh Nhut'
        }
      ]


var app_ri = new Vue({
    el: '#app-reactive-interface',
    data: {
      newStudent: "",
      students: listStudent,
      nextTodoId: 5,
    },
    methods: {
        addNewTodo: function () {
            var newList = this.students.push({
                id: addStudentMethod,
                title: this.newStudent
            })
            this.$set(this.students, listStudent, newList)
            this.newStudent = ''
        },
        deleleStudent: function(index) {
            this.$delete(this.students, index)
        },
    }
})
      `

      
    },
    methods: {
        addNewTodo: function () {
            var newList = this.students.push({
                id: addStudentMethod,
                title: this.newStudent
            })
            this.$set(this.students, listStudent, newList)
            this.newStudent = ''
        },
        deleleStudent: function(index) {
            this.$delete(this.students, index)
        },
        openModal: function() {
            Event.$emit('openModal', this.codeHTML, this.codeJS )
        }
    }
  })
