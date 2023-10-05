<template>
    <!-- 데이터 등록 화면 -->
    <div class="wrap">
        <div class="menu-title">
            <div class="header-container" >
                <h3>{{ formTitle }}</h3>
                <button @click="toggleRegistrationForm">
                    <img :src="showRegistrationForm ? 'client/resources/img/up.png' : 'client/resources/img/down.png'"
                        alt="Toggle Icon">
                </button>
            </div>
            <div class="search-section" >
                <select v-model="selectedSearchOption">
                    <option value="product_name">상품명</option>
                    <option value="product_writer">작성자</option>
                    <option value="product_date">작성일</option>
                </select>

                <!-- 작성일 선택 시 날짜 선택기 표시 -->
                <input v-if="selectedSearchOption === 'product_date'" type="date" v-model="searchKeyword"
                    @keyup.enter="dataSearch"/>

                <!-- 작성일이 아닐 때 일반 텍스트 입력 필드 표시 -->
                <input v-else type="text" v-model="searchKeyword" placeholder="검색..." @keyup.enter="dataSearch"/>

                <button @click="dataSearch()">검색</button>
            </div>
        </div>
        <div class="menu" v-show="showRegistrationForm">
            <div class="menu-content">
                <ul>
                    <li>
                        <span>상품명</span>
                        <input type="text" placeholder="상품명을 입력해주세요" v-model="newData.product_name">
                    </li>
                    <li class="menu-content-category">
                        <span>카테고리</span>
                        <label for="ameriano">
                            <img src="client/resources/img/americano.png" alt="Americano">
                            아메리카노
                            <input type="radio" name="category" id="ameriano" value="ameriano"
                                v-model="newData.product_category">
                        </label>
                        <label for="cafelatte">
                            <img src="client/resources/img/cafe_latte.png" alt="Cafelatte">
                            카페라떼
                            <input type="radio" name="category" id="cafelatte" value="cafelatte"
                                v-model="newData.product_category">
                        </label>
                        <label for="ade">
                            <img src="client/resources/img/ade.png" alt="Ade">
                            에이드
                            <input type="radio" name="category" id="ade" value="ade" v-model="newData.product_category">
                        </label>
                        <label for="smoothie">
                            <img src="client/resources/img/smoothie.png" alt="Smoothie">
                            스무디
                            <input type="radio" name="category" id="smoothie" value="smoothie"
                                v-model="newData.product_category">
                        </label>
                        <label for="frappuccino">
                            <img src="client/resources/img/frappuccino.png" alt="Frappuccino">
                            프라푸치노
                            <input type="radio" name="category" id="frappuccino" value="frappuccino"
                                v-model="newData.product_category">
                        </label>
                        <label for="coke">
                            <img src="client/resources/img/coke.png" alt="Coke">
                            콜라
                            <input type="radio" name="category" id="coke" value="coke" v-model="newData.product_category">
                        </label>
                    </li>
                    <li class="menu-content-sub">
                        <span>가격</span>
                        <input type="number" placeholder="가격을 입력해주세요" v-model="newData.product_price">
                        <span>작성자</span>
                        <input type="text" placeholder="작성자를 입력해주세요" v-model="newData.product_writer">
                    </li>
                    <li>
                        <span>상세설명</span>
                        <textarea v-model="newData.product_explan"></textarea>
                    </li>
                </ul>
            </div>
            <div class="menu-button">
                <button class="button" id="addBtn" @click="handleButtonAction()">등록</button>
                <button class="button" id="addBtn" @click="resetForm()">취소</button>
            </div>
        </div>

        <!-- 데이터 목록 화면 -->
        <div class="list">
            <table cellspacing="0">
                <colgroup>
                    <col width="5%">
                    <col width="10%">
                    <col width="45%">
                    <col width="10%">
                    <col width="10%">
                    <col width="10%">
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col">NO</th>
                        <th></th>
                        <th scope="col">상품명</th>
                        <th scope="col">작성자</th>
                        <th scope="col">작성일</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="item" v-for="(item, index) in dataList" :key="item.id"
                        :class="{ 'selected-row': selectedRow == item.product_index }" @click="dataSelectOne(item)">
                        <td>{{ dataList.length - index }}</td>
                        <td><img v-show="item.product_category === 'ameriano'" src="client/resources/img/americano_icon.png"
                                alt="Americano">
                            <img v-show="item.product_category === 'cafelatte'"
                                src="client/resources/img/cafe_latte_icon.png" alt="Cafelatte">
                            <img v-show="item.product_category === 'ade'" src="client/resources/img/ade_icon.png" alt="Ade">
                            <img v-show="item.product_category === 'smoothie'" src="client/resources/img/smoothie_icon.png"
                                alt="Smoothie">
                            <img v-show="item.product_category === 'frappuccino'"
                                src="client/resources/img/frappuccino_icon.png" alt="Frappuccino">
                            <img v-show="item.product_category === 'coke'" src="client/resources/img/coke_icon.png"
                                alt="Coke">
                        </td>
                        <td>{{ item.product_name }}</td>
                        <td>{{ item.product_writer }}</td>
                        <td>{{ item.product_date }}</td>
                        <td><button class="button" style="margin-right: 10px;" @click="dataSelectOne(item)">편집</button>
                            <button class="button" @click="dataDelete(item.product_index)">삭제</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            // 데이터 목록
            dataList: [],

            // 빈 데이터
            emptyData: {
                product_index: null,
                product_name: null,
                product_category: null,
                product_price: null,
                product_writer: null,
                product_explan: null,
                product_temperature: 'ice',
                product_date: null
            },

            // 입력 데이터
            newData: {
                product_index: null,
                product_name: null,
                product_category: null,
                product_price: null,
                product_writer: null,
                product_explan: null,
                product_temperature: 'ice',
                product_date: null
            },

            // 선택된 데이터 Row
            selectedRow: null,

            // 데이터 편집 상태 (false = 수정, true = 등록)
            isEditMode: false,
            
            // 검색어
            searchKeyword: "",
            selectedSearchOption: 'product_name',

            showRegistrationForm: true,

        }
    },
    methods: {
        // 데이터 목록 조회
        dataSelectList: function () {
            const vm = this;
            axios({
                url: "/menuSelectList.zz",
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
                data: {},
            })
                .then(function (response) {
                    console.log("dataList - response : ", response.data);
                    vm.dataList = response.data.reverse();
                })
                .catch(function (error) {
                    console.log("dataList - error : ", error);
                    alert("상품 목록 조회에 오류가 발생했습니다.");
                });
        },

        // 데이터 등록
        dataInsert: function () {
            const vm = this;
            // 필수 필드 검사
            if (!vm.newData.product_name || !vm.newData.product_category || !vm.newData.product_price || !vm.newData.product_writer) {
                alert("상품명, 카테고리, 가격, 작성자는 필수 입력 사항입니다.");
                return;
            }
            vm.newData.product_date = new Date().toISOString().slice(0, 10); // 현재 등록 시간
            axios({
                url: "/menuInsert.zz",
                method: "post",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
                data: vm.newData,
            })
            .then(function (response) {
                console.log("dataInsert - response : ", response.data);
                if (response.data > 0) {  // 서버 응답을 확인하여 상태를 처리합니다.
                    alert("상품을 등록했습니다.");
                    vm.dataSelectList(); // 업데이트된 데이터 목록 조회
                    vm.newData = vm.emptyData;
                }
                else {
                    alert("상품 등록에 실패했습니다.");
                }
            })
            .catch(function (error) {
                console.log("dataInsert - error : ", error);
                alert("상품 등록에 오류가 발생했습니다.");
            });
        },


        // 데이터 수정
        dataUpdate: function () {
            const vm = this;
            axios({
                url: "/menuUpdate.zz",
                method: "post",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
                data: vm.newData
            })
                .then(function (response) {
                    console.log("dataUpdate - response : ", response.data);
                    if (response.data > 0) {
                        alert("상품을 수정했습니다.");
                        vm.dataSelectList(); // 업데이트된 데이터 목록 조회
                    } else {
                        alert("상품 수정에 실패했습니다.");
                    }
                })
                .catch(function (error) {
                    console.log("dataUpdate - error : ", error);
                    alert("상품 수정에 오류가 발생했습니다.");
                });
        },
        // 검색 기능 
        dataSearch() {
            const vm = this;
            let searchPayload = {
                keyword: vm.searchKeyword,
                option: vm.selectedSearchOption
            };
            axios({
                url: "/menuSelectList.zz",
                method: "get",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
                data: searchPayload,  // 검색어를 함께 전송
            })
                .then(function (response) {
                    console.log("dataSearch - response : ", response.data);
                    vm.dataList = response.data;
                })
                .catch(function (error) {
                    console.log("dataSearch - error : ", error);
                    alert("상품 검색에 오류가 발생했습니다.");
                });
        },

        // 데이터 삭제
        dataDelete: function (product_index) {
            const vm = this;
            axios({
                url: "/menuDelete.zz", // 해당 product_index를 서버로 보냅니다.
                method: "post",
                params: {
                    "product_index": product_index
                },
            })
            .then(function (response) {
                console.log(`value: ${product_index.value}`);
                console.log("dataDelete - response : ", response.data);
                if (response.data > 0) {
                    alert( product_index + "상품을 삭제했습니다.");
                    vm.dataSelectList(); // 업데이트된 데이터 목록 조회
                } else {
                    alert(product_index + "상품 삭제에 실패했습니다.");
                }
            })
            .catch(function (error) {
                console.log("dataDelete - error : ", error);
                alert(product_index + "상품 삭제에 오류가 발생했습니다.");
            });
        },


        // 데이터 상세 조회
        dataSelectOne: function (item, index) {
            this.selectedRow = item.product_index; // 선택된 row 저장

            this.isEditMode = true; // 데이터 편집 상태: 등록 -> 수정

            // 클릭한 데이터 정보를 newData 객체에 할당
            this.newData = {
                product_index: item.product_index,
                product_name: item.product_name,
                product_category: item.product_category,
                product_price: item.product_price,
                product_writer: item.product_writer,
                product_explan: item.product_explan,
                product_temperature: item.product_temperature,
                product_date: item.product_date
            };
        },

        // 상품 폼 접기
        toggleRegistrationForm() {
            this.showRegistrationForm = !this.showRegistrationForm;
        },

        // 입력된 데이터 내용 초기화
        resetForm: function () {
            this.newData = this.emptyData;

            this.isEditMode = false; // 데이터 편집 상태: 수정 -> 등록
        },

        // 등록 수정 실행 버튼
        handleButtonAction() {
            if (!this.newData.product_name) {
                alert("상품명을 입력해 주세요.");
                return;
            }

            if (!this.newData.product_category) {
                alert("카테고리를 선택해 주세요.");
                return;
            }

            if (!this.newData.product_price) {
                alert("가격을 입력해 주세요.");
                return;
            }

            if (!this.newData.product_writer) {
                alert("작성자를 입력해 주세요.");
                return;
            }

            if (this.isEditMode) { // 데이터 편집 상태: 수정
                this.dataUpdate(); // 데이터 수정 함수 실행
            } else { // 데이터 편집 상태: 등록
                this.dataInsert(); // 데이터 등록 함수 실행
            }
        },

    },
    watch: {
        // selectedSearchOption 데이터 변경 시 실행
        "selectedSearchOption": function (newValue, oldValue) {
            this.searchKeyword = ""; // 검색어 초기화
        }
    },
    computed: {
        // 텍스트를 동적으로 반환
        formTitle() {
            return this.isEditMode ? '상품 수정' : '상품 등록';
        },
        // 버튼 레이블을 동적으로 반환
        buttonLabel() {
            return this.isEditMode ? '수정' : '등록';
        }
    },
    components: {

    },
    mounted() {
        console.log('main mounted');
        this.dataSelectList();
    }
}
</script>