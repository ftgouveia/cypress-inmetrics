/// <reference types = "cypress"/>

const search = "https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=HP%20ElitePad%201000%20G2&quantityPerEachCategory=-1"
const putImage = "https://www.advantageonlineshopping.com/catalog/api/v1/product/image/971488760/3/414141?product_id=16"
const authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjo5NzE0ODg3NjAsInN1YiI6ImZ0Z291X2lubWV0cmljcyIsInJvbGUiOiJVU0VSIn0.P-58cdSG0DXzkVDjOGrGuLvfAuzUFfiGDdTddYhbhYU`


class advantageShoppingApiPage {

    getProductApi() {
        cy.request("GET", search).then((response) => {
            expect(response.status).to.eq(200);
          });
    }

    postProductApiImage() {
        cy.request({
            method: 'POST',
            url: putImage,
            headers: { authorization }
          }).should(({ status, body }) => {
            const { success, reason, imageColor } = body   
        expect(status).to.eq(200)
        expect(success).to.eq('true');
        expect(reason).to.eq('Product was updated successful')
        expect(language).to.eq('414141')
         })
     };

}
export const advantageShoppingApi = new advantageShoppingApiPage();
