<template>
    <!-- 데이터 등록 화면 -->
    <div class="wrap">
        <div class="order-list-title">
            <h3 :class="{ 'selected-row': selectedOrderTab == 'standBy' }" @click="selectedOrderTab = 'standBy'">주문 대기</h3>
            <h3 :class="{ 'selected-row': selectedOrderTab == 'history' }" @click="selectedOrderTab = 'history'">주문 내역</h3>
        </div>
        <div class="menu">
            <h3 v-if="orderProductList[0]">주문 번호: {{ orderProductList[0].order_index }}</h3>
            <span v-if="orderProductList[0]">주문일자: {{ orderProductList[0].order_date }}</span>
            <div class="select-order-content" style="width: 85%; margin: 0 auto; padding: 1rem 0; text-align: left;">
                <table class="select-order-list" cellspacing="0" style="width: 100%; text-align: center;">
                    <colgroup>
                        <col width="5%">
                        <col width="10%">
                        <col width="45%">
                        <col width="10%">
                        <col width="10%">
                        <col width="10%">
                        <col width="10%">
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col">NO</th>
                            <th></th>
                            <th scope="col">상품명</th>
                            <th></th>
                            <th scope="col">단가</th>
                            <th scope="col">수량</th>
                            <th scope="col">금액</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="item" v-for="(item, index) in orderProductList">
                            <td>{{ index + 1 }}</td>
                            <td>
                                <img v-show="item.order_product_temperature == 'ice'" src="client/resources/img/ice_icon.png" alt="Ice Coffee">
                                <img v-show="item.order_product_temperature == 'hot'" src="client/resources/img/hot_icon.png" alt="Hot Coffee">
                            </td>
                            <td>{{ item.order_product_name }}</td>
                            <td><img v-show="item.order_product_category === 'ameriano'" src="client/resources/img/americano_icon.png" alt="Americano">
                                <img v-show="item.order_product_category === 'cafelatte'" src="client/resources/img/cafe_latte_icon.png" alt="Cafelatte">
                                <img v-show="item.order_product_category === 'ade'" src="client/resources/img/ade_icon.png" alt="Ade">
                                <img v-show="item.order_product_category === 'smoothie'" src="client/resources/img/smoothie_icon.png" alt="Smoothie">
                                <img v-show="item.order_product_category === 'frappuccino'" src="client/resources/img/frappuccino_icon.png" alt="Frappuccino">
                                <img v-show="item.order_product_category === 'coke'" src="client/resources/img/coke_icon.png" alt="Coke">
                            </td>
                            <td>{{ item.order_price }}</td>
                            <td>{{ item.order_amount }}</td>
                            <td>{{ item.order_amount * item.order_price }}</td>
                        </tr>
                        <tr v-show="orderProductList.length == 0">
                            <td colspan="6">상품 목록이 없습니다</td>
                        </tr>
                    </tbody>
                </table>
                <h3 style="text-align: end;">합계: {{ orderTotalPrice }}원</h3>
            </div>
            <div class="menu-button" v-show="orderProduct.order_state == 'standBy'">
                <button class="button" id="addBtn" @click="orderUpdate('complete')" style="width: 70px; height: 30px;">결제완료</button>
                <button class="button" id="addBtn" @click="orderUpdate('cancel')" style="width: 70px; height: 30px;">주문취소</button>
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
                        <th>주문번호</th>
                        <th scope="col">상품명</th>
                        <th>주문금액</th>
                        <th scope="col">주문일</th>
                        <th scope="col">주문상태</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="item" v-for="(item, index) in orderList"
                        :class="{ 'selected-row': selectedRow == item.order_index }" @click="orderSelectOne(item)">
                        <td>{{ orderList.length - index }}</td>
                        <td>{{ item.order_index }}</td>
                        <td>{{ item.order_product_name }} <span v-show="item.order_product_count > 1" style="color: brown;">외 {{ item.order_product_count - 1 }}</span></td>
                        <td>{{ item.order_price_sum }}</td>
                        <td>{{ item.order_date }}</td>
                        <td>
                            <span v-show="item.order_state == 'standBy'" style="color: green;">대기</span>
                            <span v-show="item.order_state == 'complete'" style="color: blue;">완료</span>
                            <span v-show="item.order_state == 'cancel'" style="color: red;">취소</span>
                        </td>
                    </tr>
                    <tr v-show="orderList.length == 0">
                        <td colspan="6">주문 목록이 없습니다</td>
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
            // 탭 목록
            orderTab: ['standBy', 'history'],

            // 선택된 탭
            selectedOrderTab: 'standBy',

            // 주문 목록
            orderList: [],

            // 주문 상품 목록
            orderProductList: [],
            
            orderProduct: {
                order_index: null,
                order_product_number: null,
                order_product_name: null,
                order_product_category: null,
                order_product_temperature: null,
                order_amount: null,
                order_price: null,
                order_date: null,
                order_state: null
            },

            // 상품 합계 금액
            orderTotalPrice: 0,

            // 선택된 데이터 Row
            selectedRow: null,
        }
    },
    methods: {
        // 주문 목록 조회
        orderSelectList: function () {
            const vm = this;
            axios({
                url: "/orderSelectList.json",
                method: "post",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
                data: { 
                    order_state: vm.selectedOrderTab
                },
            })
                .then(function (response) {
                    console.log("orderList - response : ", response.data);
                    vm.orderList = response.data;
                    if(response.data.length > 0) {
                        vm.orderSelectOne(response.data[0]);
                    } else {
                        vm.resetForm();
                    }
                })
                .catch(function (error) {
                    console.log("orderList - error : ", error);
                    alert("주문 목록 조회에 오류가 발생했습니다.");
                });
        },

        // 주문 상세 조회
        orderSelectOne: function (item) {
            const vm = this;
            axios({
                url: "/orderSelectOne.json",
                method: "post",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
                data: {
                    order_index: item.order_index
                },
            })
                .then(function (response) {
                    console.log("orderSelectOne - response : ", response.data);
                    vm.selectedRow = item.order_index; // 선택된 row 저장
                    vm.orderProductList = response.data;
                    vm.orderProduct = response.data[0];
                    vm.orderPrice();
                })
                .catch(function (error) {
                    console.log("orderSelectOne - error : ", error);
                    alert("주문 상세 조회에 오류가 발생했습니다.");
                });
        },

        // 장바구니 상품 금액 합산
        orderPrice: function () {
            this.orderTotalPrice = 0; // 합계 금액 초기화

            for(let i=0; i<this.orderProductList.length; i++) {
                this.orderTotalPrice += this.orderProductList[i].order_price * this.orderProductList[i].order_amount;
            }
        },

        // 대기 주문 상태 변경
        orderUpdate: function (state) {
            let message = null;
            if(state == 'complete') {
                message = '완료';
            } else {
                message = '취소';
            }

            if (confirm(`주문 ${message}하시겠습니까?`) == false) {
                return;
            }

            const vm = this;
            axios({
                url: "/orderUpdate.json",
                method: "post",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
                data: {
                    order_index: vm.selectedRow,
                    order_state: state
                }
            })
                .then(function (response) {
                    console.log("orderUpdate - response : ", response.data);
                    if (response.data > 0) {
                        alert("주문 처리가 완료되었습니다.");
                        vm.orderSelectList(); // 업데이트된 데이터 목록 조회
                    } else {
                        alert("주문 처리에 실패하였습니다.");
                    }
                })
                .catch(function (error) {
                    console.log("orderUpdate - error : ", error);
                    alert("주문 처리에 오류가 발생했습니다.");
                });
        },

        // 입력된 데이터 내용 초기화
        resetForm: function () {
            this.orderProductList = [];
            this.orderProduct = {};
            this.orderTotalPrice = 0;
        },

    },
    watch: {
        // 탭 변경 시 주문 목록 조회
        "selectedOrderTab": function (newValue, oldValue) {
            this.orderSelectList();
        }

    },
    computed: {

    },
    components: {

    },
    mounted() {
        console.log('main mounted');
        this.orderSelectList();
    }
}
</script>