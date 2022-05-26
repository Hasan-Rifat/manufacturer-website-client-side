import React from "react";

const Blogs = () => {
  const qna = [
    {
      questions: "How will you improve the performance of a React Application?",
      answer:
        "To optimize feedback rendering, you need to make sure that the components receive only the required props. This will allow you to control CPU costs and avoid unnecessary rendering of unnecessary features. The solution is to create a functional component that will collect all the props and redistribute them to other components.",
      id: 1,
    },
    {
      questions:
        "What are the different ways to manage a state in a React application?",
      answer:
        "The reaction uses an observable object as a state that observes what has changed in the state and helps the element to behave accordingly. For example, if we update the status of any of the components as below, the webpage will not re-render itself because the reacted state will not be able to detect the changes.",
      id: 2,
    },
    {
      questions: "How does prototypical inheritance work?",
      answer:
        "Prototype-based programming is a style of object-oriented programming where behavior reuse (known as inheritance) is performed through the process of reusing existing objects that act as prototypes. This model can also be referred to as prototype, prototype-based, classless or example-based programming.",
      id: 3,
    },
    {
      questions:
        "Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?",
      answer:
        "React will then look at the virtual DOM, it also has a copy of the old virtual DOM, that is why we shouldn't update the state directly, so we can have two different object references in memory, we have the old virtual DOM as well as the new virtual DOM. setState, and React. useState create queues for React core to update the state object of a React component. So the process to update React state is asynchronous for performance reasons. That's why changes don't feel immediate.",
      id: 4,
    },
    {
      questions:
        "You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?",
      answer:
        "I will use rest api for this and use the name of the specific product to find them. I will find it in rest api.",
      id: 5,
    },
    {
      questions: "What is a unit test? Why should write unit tests?",
      answer:
        "Unit testing is a software development process where the smallest testable part of an application, called a unit, is verified individually and independently for proper operation. This testing method is used by software developers and sometimes QA staff during the development process. For Test-Driven Development (TDD), write the unit test before you write any implementation. It minimizes the details of your implementation in your code and makes it easier to understand. In this example, the best time to write a unit test is immediately. For others, most developers write unit tests after writing code",
      id: 6,
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2
        className="text-accent
        font-bold text-4xl pb-8"
      >
        Blogs
      </h2>
      <div className="shadow-2xl">
        {qna.map((q) => (
          <div key={q.id} className="accordion" id="accordionExample">
            <div className="accordion-item bg-white border border-gray-200">
              <h2 className="accordion-header mb-0" id="headingOne">
                <button
                  className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
        text-secondary
        font-bold
        text-xl
      "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {q.questions}
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body py-4 px-5">
                  <p className="text-left  text-accent">{q.answer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
