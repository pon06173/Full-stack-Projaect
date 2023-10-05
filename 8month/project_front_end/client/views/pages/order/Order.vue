<template>
    <div class="w1400">

        <div class="order-wrap">
            <div class="order-border">


                <div class="order-h1">
                    <h1>상품 주문</h1>
                </div>
                <div class="list">
                    <table cellspacing="0">
                        <colgroup>
                            <col width="5%">
                            <col width="50%">
                            <col width="10%">
                            <col width="10%">
                            <col width="10%">
                            <col width="10%">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">NO</th>
                                <th scope="col">상품명</th>
                                <th></th>
                                <th scope="col">가격</th>
                                <th colspan="2" scope="col">담기</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="order-item" v-for="(item, index) in dataList" :key="item.id"
                                :class="{ 'selected-row': selectedRow == item.product_index }">
                                <td>{{ dataList.length - index }}</td>
                                <td>{{ item.product_name }}</td>
                                <td class="order-item-img"><img v-show="item.product_category === 'ameriano'" src="client/resources/img/americano.png" alt="Americano">
                                    <img v-show="item.product_category === 'cafelatte'" src="client/resources/img/cafe_latte.png" alt="Cafelatte">
                                    <img v-show="item.product_category === 'ade'" src="client/resources/img/ade.png" alt="Ade">
                                    <img v-show="item.product_category === 'smoothie'" src="client/resources/img/smoothie.png" alt="Smoothie">
                                    <img v-show="item.product_category === 'frappuccino'" src="client/resources/img/frappuccino.png" alt="Frappuccino">
                                    <img v-show="item.product_category === 'coke'" src="client/resources/img/coke.png" alt="Coke">
                                </td>
                                <td>{{ item.product_price }}원</td>
                                <td><button class="button" value="ice" @click="dataSelectOneByOrder(item, 'ice')">아이스</button></td>
                                <td><button class="button" value="hot" @click="dataSelectOneByOrder(item, 'hot')" :disabled="categoryIce.includes(item.product_category)" :style="{'background-color' : categoryIce.includes(item.product_category) ? 'gray' : ''}">핫</button></td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <div class="order-menu">
                    <div class="order-menu-sec">
                        <div class="order-menu-h">
                            <h3>장바구니</h3>
                            <button v-show="isMenuOpen" class="button" style="margin: 2%;" @click="isMenuOpen = false">▼</button>
                            <button v-show="!isMenuOpen" class="button" style="margin: 2%;" @click="isMenuOpen = true">▲</button>
                        </div>

                        <div class="order-table-sec" v-show="isMenuOpen">

                            <div class="order-sub-h">

                                <h4>선택상품 </h4>
                            </div>
                            <div class="menu-content-order">
                                <table class="menu-content-table" cellspacing="0">
                                    <colgroup>
                                        <col width="10%">
                                        <col width="50%">
                                        <col width="10%">
                                        <col width="15%">
                                        <col width="15%">
                                    </colgroup>
                                    <tbody>
                                    <tr class="item" v-for="(item, index) in orderBeforeList">
                                        <td><img v-show="item.order_product_category === 'ameriano'" src="client/resources/img/americano_icon.png" alt="Americano">
                                            <img v-show="item.order_product_category === 'cafelatte'" src="client/resources/img/cafe_latte_icon.png" alt="Cafelatte">
                                            <img v-show="item.order_product_category === 'ade'" src="client/resources/img/ade_icon.png" alt="Ade">
                                            <img v-show="item.order_product_category === 'smoothie'" src="client/resources/img/smoothie_icon.png" alt="Smoothie">
                                            <img v-show="item.order_product_category === 'frappuccino'" src="client/resources/img/frappuccino_icon.png" alt="Frappuccino">
                                            <img v-show="item.order_product_category === 'coke'" src="client/resources/img/coke_icon.png" alt="Coke">
                                        </td>
                                        <td>{{ item.order_product_name }}</td>
                                        <td>
                                            <img v-show="item.order_product_temperature == 'ice'" src="client/resources/img/ice_icon.png" alt="Ice Coffee">
                                            <img v-show="item.order_product_temperature == 'hot'" src="client/resources/img/hot_icon.png" alt="Hot Coffee">
                                        </td>
                                        <td>
                                            <button class="button" style="width: 30px; height: 20px;" type="button" @click="orderBeforeAmount(item, 'plus')">+</button>
                                            {{ item.order_amount }}
                                            <button class="button" style="width: 30px; height: 20px;" type="button" @click="orderBeforeAmount(item, 'minus')">-</button>
                                        </td>
                                        <td>{{ item.order_amount * item.order_price }} 원</td>
                                    </tr>
                                    <tr v-show="orderBeforeList.length == 0">
                                        <td colspan="5">선택한 상품이 없습니다</td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                            <div class="order-total">
                                <p>합계:</p>
                                <p>{{orderBeforeTotalPrice}} 원</p>
                            </div>

                            <div class="order-menu-button">
                                <button class="order-button" id="addBtn" @click="orderInsert">주문하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>


import axios from "axios";

export default {
    data() {
        return {
            // 상품 목록
            dataList: [],

            // 장바구니 목록
            orderBeforeList: [],

            // 선택된 데이터 Row
            selectedRow: null,

            // 장바구니 메뉴창 상태
            isMenuOpen: false,

            // 장바구니 합계 금액
            orderBeforeTotalPrice: 0,

            // 아이스 카테고리 목록
            categoryIce: ['ade', 'smoothie', 'frappuccino', 'coke'],
        }
    },
    methods: {
        // 상품 목록 조회
        dataSelectList: function () {
            const vm = this;
            axios({
                url: "/dataSelectList.json",
                method: "post",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
                data: {},
            })
                .then(function (response) {
                    console.log("dataList - response : ", response.data);
                    vm.dataList = response.data;
                })
                .catch(function (error) {
                    console.log("dataList - error : ", error);
                    alert("상품 목록 조회에 오류가 발생했습니다.");
                });
        },

        // 상품 선택
        dataSelectOneByOrder: function (item, temp) {
            this.selectedRow = item.order_index; // 선택된 row 저장

            if(!this.isMenuOpen) {
                this.isMenuOpen = true; // 장바구니 메뉴창 닫힘 -> 열림
            }

            /* 장바구니 중복 메뉴 검사 */
            let exist = 0;
            for(let i=0; i<this.orderBeforeList.length; i++) {
                if(this.orderBeforeList[i].product_index == item.product_index && this.orderBeforeList[i].order_product_temperature == temp) {
                    exist = 1;
                    this.orderBeforeList[i].order_amount ++;
                    this.orderBeforeTotalPrice += this.orderBeforeList[i].order_price; // 합계 금액 추가
                    break;
                }
            }

            // 메뉴 중복이 아닐 시 선택한 메뉴 변수에 담기
            let orderBefore = {}
            if(exist == 0) {
                orderBefore = {
                    product_index: item.product_index,
                    order_product_name: item.product_name,
                    order_product_category: item.product_category,
                    order_product_temperature: temp,
                    order_amount: 1,
                    order_price: item.product_price
                };
                
                this.orderBeforeList.push(orderBefore); // 선택 메뉴 장바구니에 담기
                this.orderBeforeTotalPrice += item.product_price; // 합계 금액 추가
            }

            this.orderBeforePrice(); // 장바구니 상품 금액 합산
        },

        // 장바구니 상품 수량 버튼
        orderBeforeAmount: function (item, sign) {
            if(sign == 'plus') {
                item.order_amount++;
            } else {
                console.log("item.order_amount: ", item.order_amount);
                if(item.order_amount <= 1) {
                    this.orderBeforeRemove(item); // 상품 삭제
                } else {
                    item.order_amount--;
                }
            }

            this.orderBeforePrice(); // 장바구니 상품 금액 합산
        },

        // 장바구니 상품 삭제
        orderBeforeRemove: function (item) {
            if(confirm("상품을 삭제합니까?") == false) {
                return;
            }

            for(let i=0; i<this.orderBeforeList.length; i++) {
                if(this.orderBeforeList[i].product_index == item.product_index && this.orderBeforeList[i].order_product_temperature == item.order_product_temperature) {
                    this.orderBeforeList.splice(i, 1)
                    break;
                }
            }

            this.orderBeforePrice(); // 장바구니 상품 금액 합산
        },

        // 장바구니 상품 금액 합산
        orderBeforePrice: function () {
            this.orderBeforeTotalPrice = 0; // 합계 금액 초기화

            for(let i=0; i<this.orderBeforeList.length; i++) {
                this.orderBeforeTotalPrice += this.orderBeforeList[i].order_price * this.orderBeforeList[i].order_amount;
            }
        },

        // 주문 등록
        orderInsert: function () {
            
            const vm = this;
            
            if (vm.orderBeforeList.length < 1) {
                alert("상품을 추가해주세요.");
                return;
            } else if (confirm("선택한 상품을 주문하시겠습니까?") == false) {
                return;
            }

            // for(let i in vm.orderBeforeList) {
            for(let i=0; i<this.orderBeforeList.length; i++) {
                vm.orderBeforeList[i].order_product_number = i+1;
                vm.orderBeforeList[i].order_date = new Date().toISOString().slice(0, 10); // 현재 등록 시간
                vm.orderBeforeList[i].order_state = 'standBy';
            }
                
            axios({
                url: "/orderInsert.json",
                method: "post",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
                data: {
                    orderBeforeList: vm.orderBeforeList,
                }
            })
                .then(function (response) {
                    console.log("orderInsert - response : ", response.data);
                    if (response.data > 0) {  // 서버 응답을 확인하여 상태를 처리합니다.
                        alert("상품을 주문했습니다.");
                        vm.resetForm();
                    }
                    else {
                        alert("상품 주문에 실패했습니다.");
                    }
                })
                .catch(function (error) {
                    console.log("orderInsert - error : ", error);
                    alert("상품 주문에 오류가 발생했습니다.");
                });
        },

        // 입력된 데이터 내용 초기화
        resetForm: function () {
            this.orderBeforeList = []; // 장바구니 초기화
            this.isMenuOpen = false; // 장바구니 메뉴창 상태: 열기 -> 닫기
            this.orderBeforeTotalPrice = 0; // 합계 금액 초기화
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
        this.dataSelectList();
    }


}
</script>