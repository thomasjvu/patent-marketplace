//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getPatent)

function getPatent(){
  const choice = document.querySelector('input').value
  const url = `https://developer.uspto.gov/ipmarketplace-api/search/query?searchText=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        document.querySelector('#patentNumber').innerText = data.results[0].publicationNumber
        document.querySelector('#publishDate').innerText = data.results[0].publicationDate
        document.querySelector('#assigneeNameText').innerText = data.results[0].assigneeNameText
        document.querySelector('#inventionAbstractText').innerHTML = data.results[0].inventionAbstractText
        document.querySelector('#licenseAvailabilityCategory').innerHTML = data.results[0].licenseAvailabilityCategory

        document.querySelector('#licenseeContactName').innerText = data.results[0].licenseeContactName
        document.querySelector('#licenseeContactPhoneNumber').innerText = data.results[0].licenseeContactPhoneNumber
        document.querySelector('#licenseeContactEmailAddressText').innerText = data.results[0].licenseeContactEmailAddressText
        document.querySelector('#licenseeContactWebAddressURI').innerText = data.results[0].licenseeContactWebAddressURI

        // const hidden = document.getElementsByClassName('hidden')
        // hidden.classList.toggle('hidden')

      //   for (i = 0; i <= data.results.length; i++) {
      //   document.querySelector('#patentNumber').innerText = data.results[i].publicationNumber
      //   document.querySelector('#publishDate').innerText = data.results[i].publicationDate
      //   document.querySelector('#assigneeNameText').innerText = data.results[i].assigneeNameText
      //   document.querySelector('#inventionAbstractText').innerHTML = data.results[i].inventionAbstractText
      //   document.querySelector('#licenseAvailabilityCategory').innerHTML = data.results[i].licenseAvailabilityCategory
      // }
      
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}