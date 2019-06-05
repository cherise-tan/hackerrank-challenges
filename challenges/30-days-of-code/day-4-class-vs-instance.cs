// Write a Person class with an instance variable, "age", and a constructor that takes an integer, "initialAge", as a parameter.
// The constructor must assign "initialAge" to "age" after confirming the argument passed as  is not negative
// If a negative argument is passed as "initialAge", the constructor should set "age" to "0"
// and print "Age is not valid, setting age to 0.".
// In addition, you must write the following instance methods:
//   yearPasses() should increase the "age" instance variable by "1".
//   amIOld() should perform the following conditional actions:
//     If "age < 13", print "You are young.".
//     If "age >= 13" and "age < 18", print "You are a teenager.".
//     Otherwise, print "You are old.".

class Person {
  public int age;

	public Person(int initialAge) {
    // Add some more code to run some checks on initialAge
    if (initialAge > 0){
      age = initialAge;
    } else {
      age = 0;
      Console.WriteLine("Age is not valid, setting age to 0.");
    }
  }

  public void amIOld() {
    // Do some computations in here and print out the correct statement to the console
    if (age < 13){
      Console.WriteLine("You are young.");
    } else if (age <18) {
      Console.WriteLine("You are a teenager.");
    } else {
      Console.WriteLine("You are old.");
    }
  }

  public void yearPasses() {
    // Increment the age of the person in here
    age++;
  }

  static void Main(String[] args) {
  int T=int.Parse(Console.In.ReadLine());
  for (int i = 0; i < T; i++) {
    int age=int.Parse(Console.In.ReadLine());
    Person p=new Person(age);
    p.amIOld();
    for (int j = 0; j < 3; j++) {
      p.yearPasses();
    }
    p.amIOld();
    Console.WriteLine();
    }
  }
}
