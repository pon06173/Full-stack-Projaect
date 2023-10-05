<template>
    <div>
        메뉴관리화면입니다.
    </div>
</template>

<script>
    const App = {
        data: () => {
            return {
                testNumber: 1,
                testString: '문자열'
            }
        },
        mounted() {
            console.log('메뉴관리화면이 마운트 됨');
        },
    }

    export default App;
</script>