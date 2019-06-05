class Solution {
  static void Main(string[] args) {
    double meal_cost = Convert.ToDouble(Console.ReadLine());
    int tip_percent = Convert.ToInt32(Console.ReadLine());
    int tax_percent = Convert.ToInt32(Console.ReadLine());

    var tip = meal_cost * tip_percent/100;
    var tax = meal_cost * tax_percent/100;

    var totalCost = Math.Round(meal_cost + tax + tip);

    Console.WriteLine(totalCost);
    }
}
