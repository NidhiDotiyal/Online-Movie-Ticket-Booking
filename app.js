history.pushState(null, '', window.location.pathname + '?movie=Inside%20Out%202');

let updatedUrl = window.location.href;
let urlParams = new URLSearchParams(updatedUrl.split('?')[1]);

let url_movie = urlParams.get('movie');
if (url_movie) {
    let decodedMovieName = decodeURIComponent(url_movie);
    let date = new Date();
    let main_date = date.getDate();
    
    let pvr = [
        {
            pvr: 'Nidhi Theatre',
            movie: 'Inside Out 2',
            loc: 'Sector-6, Panchkula',
            audi: 1,
            type: '2D',
            series: ['J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T'],
            row_section: 3,
            seat: 24,
            j: [2, 6, 17, 16, 15, 22, 7, 19, 20, 21, 23],
            k: [1, 2, 3, 17, 18, 9, 10],
            l: [2, 7, 8, 9, 10],
            m: [5, 6],
            n: [1, 2, 3, 4, 23, 24],
            p: [1, 2, 3, 4, 5, 6, 7, 8, 18, 19, 20],
            q: [6, 7],
            r: [],
            s: [23, 24],
            t: [1, 2, 14, 15, 16],
            price: [280, 280, 300, 300, 450, 450, 450, 450, 600, 720],
            date: main_date,
            img: 'images/insideOut2vert.png',
            times: ['10:00am', '11:30am', '02:45pm', '4:25pm', '05:00pm', '06:30pm', '07:00pm', '10:50pm'],
        },
        {
            pvr: 'Nidhi Theatre',
            movie: 'Indian2',
            loc: 'Sector-6, Panchkula',
            audi: 2,
            type: '2D',
            series: ['J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T'],
            row_section: 3,
            seat: 24,
            j: [2, 6, 17, 16, 15, 22, 7, 19, 20, 21, 23],
            k: [23, 24],
            l: [2, 7, 8, 9, 10],
            m: [5, 6],
            n: [1, 2, 3, 4],
            p: [1, 2, 3, 4, 5, 6, 7, 8, 18, 19, 20],
            q: [6, 7],
            r: [9, 10, 21, 22, 7, 19, 20, 23],
            s: [1, 2, 3, 17, 18, 9, 10],
            t: [],
            price: [280, 280, 300, 300, 450, 450, 450, 450, 600, 720],
            date: main_date,
            img: 'img/Indian2',
             times: ['10:00am', '11:30am', '02:45pm', '4:25pm', '05:00pm', '06:30pm', '07:00pm', '10:50pm'],
        }
    ];

    
        let selectedMovie = pvr.find(movie => movie.movie === decodedMovieName);
        if (selectedMovie) {
            // Update UI with selected movie details
            console.log('Selected Movie:', selectedMovie.movie);
            console.log('Movie Details:', selectedMovie);
            // Update UI elements with selectedMovie details
        } else {
            console.log('Movie not found:', decodedMovieName);
        }
    
    let updateArrowVisibility = () => {
        let selectedSeats = document.querySelectorAll('.seat.selected');
        let arrowElement = document.getElementById('book_ticket');
        
        if (selectedSeats.length > 0) {
            arrowElement.style.display = 'block'; // Show the arrow
        } else {
            arrowElement.style.display = 'none'; // Hide the arrow
        }
    };


    // document.getElementById('book_ticket').addEventListener('click', () => {
    //     let selectedSeats = document.querySelectorAll('.seat.selected');
        
    //     selectedSeats.forEach(seat => {
    //         seat.classList.remove('selected'); // Remove selected class
    //         seat.classList.add('booked'); // Add booked class
    //     });

    //     updateArrowVisibility(); // After booking, hide the arrow since no seats are selected anymore
    // });

    

    let addSeats = (arr) => {
        document.getElementById('chair').innerHTML = '';

        arr.forEach(el => {
            const { series, row_section, seat, price, j, k, l, m, n, p, q, r, s, t } = el;

            series.forEach((rowLabel, rowIndex) => {
                let row = document.createElement('div');
                row.className = 'row';

                let booked_seats = eval(rowLabel.toLowerCase());
                let span = document.createElement('span');
                span.innerText = rowLabel;
                row.appendChild(span);

                for (let seatNumber = 1; seatNumber <= seat; seatNumber++) {
                    let li = document.createElement('li');
                    li.innerText = `₹${price[rowIndex]}`;
                    // li.innerText = seatNumber;
                    li.id = `${rowLabel}${seatNumber}`;
                    li.setAttribute('book', seatNumber);
                    li.setAttribute('series', rowLabel);
                    
                //     let seatIndex = seatNumber - 1;
                // let seatPrice = price[rowIndex]; // Get price from the price array based on rowIndex

                // // Set seat price display
                // li.innerText = `₹${seatPrice}`;



                    if (booked_seats.includes(seatNumber)) {
                        li.className = "seat booked";
                    } else {
                        li.className = "seat";
                        li.addEventListener('click', () => {
                            li.classList.toggle('selected');
                            updateArrowVisibility();
                        });
                    }

                    row.appendChild(li);

                    if (seatNumber === seat) {
                        let span = document.createElement('span');
                        span.innerText = rowLabel;
                        row.appendChild(span);
                    }
                }

                document.getElementById('chair').appendChild(row);
            });
        });
    };
    

    let data = pvr.filter(obj => obj.date === main_date && obj.movie === decodedMovieName);
    // document.getElementById('title').innerText= data[0].movie;
    // document.getElementById('poster').innerText= data[0].img;
    addSeats(data);
    // updateArrowVisibility(); 

  

// Event listener for movie time selection


// Select the book ticket button
const bookTicketBtn = document.getElementById('bookTicketBtn');

// Event listener for clicking on the book ticket button
bookTicketBtn.addEventListener('click', function() {
    let selectedTime = movieTimeSelect.value;
    console.log('Selected time for booking:', selectedTime);
    // Perform actions to book ticket based on the selected time
    // For example, display booking details, update UI, etc.
});

    document.getElementById('book_ticket').addEventListener('click', () => {
        let selectedSeats = document.querySelectorAll('.seat.selected');
        let selectedTime = document.getElementById('movie_time').value;
        let formattedTime = selectedTime.replace(/\s?[ap]m/i, '');

        document.getElementById('ticket').innerHTML = '';
        selectedSeats.forEach(el => {
            let seat_no = el.getAttribute('book');
            let seat_sr = el.getAttribute('series').toLocaleUpperCase();
            
            // pvr.map(obj => {
            //     if (obj.movie === url_movie && obj.date === main_date) {
            //         obj[seat_sr].push(+seat_no);
            //     }
            //     return obj;
            // });

            el.classList.remove('selected'); // Remove selected class
            el.classList.add('booked'); // Add booked class
            // let ticketContainer = document.createElement('div');
            // ticketContainer.className = 'tic';
            let ticketContainer = document.createElement('div');
            ticketContainer.className = 'tic';
    
            ticketContainer.innerHTML =         
//   let tic= document.createElement('div');
//   tic.className='tic'
//   tic.innerHTML =
  ` 
  <div class="barcode">
                <div class="card">
                <h6>Row ${seat_sr}</h6>
                <h6> ${main_date}July </h6>
                </div>
              
              <div class="card">
                <h6>Seat ${seat_no}</h6>
                <h6>${formattedTime}</h6>
              </div>

            <svg id="${seat_sr}${seat_no}barcode"></svg>
            <h5>NIDHI THEATRE</h5>
    </div>

    <div class="tic_details">
              <div class="type">2D</div>
              <h5 class="pvr">Nidhi<span>Theatre</span></h5>
              <h1>${decodedMovieName}</h1>

              <div class="seat_set">
                <div class="seat_cr">
                  <h6>Row</h6>
                  <h6>${seat_sr}</h6>
                </div>

                <div class="seat_cr">
                  <h6>Seat</h6>
                  <h6>${seat_no}</h6>
                </div>
                
                <div class="seat_cr">
                  <h6>Date</h6>
                  <h6>${main_date}July</h6>
                </div>
               
                <div class="seat_cr">
                    <h6>Time</h6>
                    <h6>${formattedTime}</h6>
                </div>
                </div>
    </div>
    `

                document.getElementById('ticket').appendChild(ticketContainer);
                // JsBarcode(`#${seat_sr}${seat_no}barcode`, `${seat_sr.toUpperCase()}${seat_no}${el.innerText}`);
        // updateArrowVisibility();
        let barcodeContent = `${seat_sr}${seat_no}${main_date}${formattedTime}`;
        barcodeContent = barcodeContent.replace(/:/g, '');
        try {
            JsBarcode(`#${seat_sr}${seat_no}barcode`, barcodeContent);
        } catch (error) {
            console.error("Error generating barcode:", error);
        }
       
    });
        document.getElementById('screen').style.display='none';
        document.getElementById('chair').style.display='none';
        document.getElementById('det').style.display='none';
        document.getElementById('book_ticket').style.display='none';
        document.getElementById('back_ticket').style.display='unset';
        document.getElementById('ticket').style.display='block';
        updateArrowVisibility();
    });
// });
    document.getElementById('back_ticket').addEventListener('click',() => {
        document.getElementById('screen').style.display='inline-block';
        document.getElementById('chair').style.display='block';
        document.getElementById('det').style.display='flex';
        document.getElementById('book_ticket').style.display='unset';
        document.getElementById('back_ticket').style.display='none';
        document.getElementById('ticket').style.display='none';   
    } );

    

    updateArrowVisibility();
}