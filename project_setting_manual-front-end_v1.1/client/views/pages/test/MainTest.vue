<template>
    <div>
        <h1>Main.vue</h1>
        <input v-model="insertData['user_id']" placeholder="아이디를 입력해주세요">
        <input v-model="insertData['user_name']" placeholder="이름을 입력해주세요">
        <button @click="log()">등록</button>
        <div v-for="(item, idx) in testList">
            <br>
            아이디: {{ item.user_id }}
            <br>
            이름: {{ item.user_name }}
            <br>
        </div>

    </div>
</template>

<script>
import axios from "axios";

export default {
    data () {
        return {
            // 테스트 데이터 목록
            testList: [],

            // 입력 데이터
            insertData: {
                user_id: "test",
                user_name: "테스터"
            }
        }
    },
    methods: {
        log: function() {
            console.log("insertData: ", this.insertData);

            // 입력 데이터 복사
            let data = JSON.parse(JSON.stringify(this.insertData));
            // 복사된 데이터 저장
            this.testList.push(data);

            // 입력란 초기화
            this.insertData['user_id'] = null;
            this.insertData['user_name'] = null;
        },

        // test
        testDataSelectList: function () {
            console.log("testDataSelectList Run");
            const vm = this;
            axios({
                url: "/testDataSelectList.json",
                method: "post",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
                data: {
                    newData: vm.insertData,
                    oldData: "abc"
                },
            })
                .then(function (response) {
                    console.log("testList - response : ", response.data);
                    vm.testList = response.data;
                })
                .catch(function (error) {
                    console.log("testList - error : ", error);
                    alert("테스트 목록 조회 오류");
                });
        },
    },
    watch: {

    },
    computed: {

    },
    components: {

    },
    mounted() {
        console.log('main mounted');
        this.testDataSelectList();
    }
}
</script>