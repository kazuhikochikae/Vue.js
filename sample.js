      new Vue({
        // このelにHTMLのidを指定することで、そのidのDOMでVue.jsのインスタンスがインポートされる
        el: "#app",
        // dataは、定義されたVue.jsのインスタンスが持つ属性（値）
        data: {
          name: "A山B郎",
          course: "Webエンジニアコース",
          acceptancePeriod: "2019年01月期",
          students: [
            {
              id: 1,
              name: "野呂浩良",
              course: "機械学習コース",
              acceptancePeriod: "2019年01月期",
            },
            {
              id: 2,
              name: "富永修司",
              course: "Webエンジニアコース",
              acceptancePeriod: "2017年11月期",
            },
            {
              id: 3,
              name: "斉藤一起",
              course: "Webエンジニアコース",
              acceptancePeriod: "2017年11月期",
            },
          ],
        },
        // methodsに、Vue.jsのインスタンスに使用させたいメソッドを記載する
        methods: {
          addStudent: function () {
            // 新しいIDを生成するため、最後のIDを取得し+1する
            const lastId = this.students[this.students.length - 1].id;
            const newId = lastId + 1;

            // 入力された値と新しいIDをstudents配列に追加
            this.students.push({
              id: newId,
              name: this.name,
              course: this.course,
              acceptancePeriod: this.acceptancePeriod,
            });

            // 入力欄をクリアする
            this.name = "";
            this.course = "";
            this.acceptancePeriod = "";
          },
        },
      });