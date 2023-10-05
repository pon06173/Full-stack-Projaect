public class Test {

    Test2 test2 = new Test2();

    public int add (int firstNumber, int secondNumber) {

        test2.setFirstNumber(firstNumber);
        test2.setSecondNumber(secondNumber);

        int result = test2.getFirstNumber() + test2.getSecondNumber();

        return result;
    }

}
