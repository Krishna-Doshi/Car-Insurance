// import { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
// import ExampleCarouselImage from '/ExampleCarouselImage';


// export function SlidesCarousel() {
//     const [index, setIndex] = useState(0);
  
//     const handleSelect = (selectedIndex) => {
//       setIndex(selectedIndex);
//     };
  
//     return (
//         <Container>
//     <div className="d-flex justify-content-center">
//       <Carousel activeIndex={index} onSelect={handleSelect}>
//         <Carousel.Item>
//         <img   src="https://media.istockphoto.com/id/1173046833/photo/sale-agent-deal-to-agreement-successful-car-loan-contract-with-customer-and-sign-agreement.jpg?s=612x612&w=0&k=20&c=0ZTfEfidz5PFLqXWu0lsAraXYbVLD4tWeoNaXM6cb2U=" />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//         <img src="https://media.istockphoto.com/id/1264403893/photo/concept-of-insurance-man-protective-and-car-family-health-insurance-policy-examining.jpg?s=612x612&w=0&k=20&c=uWAHnHBqar1YTJB0VzUY9EZ7jwXoZwGiDbawbrUwsKI="/>
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//         <img  src="https://media.istockphoto.com/id/1150816324/photo/motor-or-car-insurance-claim-form-composition.jpg?s=612x612&w=0&k=20&c=s6AsIU9EwaPH-dO2IZxANNqj9tIs80Vwj5ZuMF38ogY=" />
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
     
//     </div>
//     </Container>

   
//     );
   
//   }
  export function SlidesCarousel() {
    return (
        <Container>
          <div className="d-flex justify-content-center">
      <Carousel>
        <Carousel.Item>
        <img src="https://media.istockphoto.com/id/1173046833/photo/sale-agent-deal-to-agreement-successful-car-loan-contract-with-customer-and-sign-agreement.jpg?s=612x612&w=0&k=20&c=0ZTfEfidz5PFLqXWu0lsAraXYbVLD4tWeoNaXM6cb2U=" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src="https://media.istockphoto.com/id/1264403893/photo/concept-of-insurance-man-protective-and-car-family-health-insurance-policy-examining.jpg?s=612x612&w=0&k=20&c=uWAHnHBqar1YTJB0VzUY9EZ7jwXoZwGiDbawbrUwsKI="/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img  src="https://media.istockphoto.com/id/1150816324/photo/motor-or-car-insurance-claim-form-composition.jpg?s=612x612&w=0&k=20&c=s6AsIU9EwaPH-dO2IZxANNqj9tIs80Vwj5ZuMF38ogY=" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      </Container>
    );
  }
