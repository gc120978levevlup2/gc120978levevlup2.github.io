// this view is used to dress up a footer
// naming convention: objectName_elementTag_view
export const root_view = () => {
    $('#root').html(/*html*/`

        <div class="grid-container">
            <div>
                <div class="row">
                    <div class="col-md-12" id="header"></div>
                </div>
            </div>
            <div class="container page-body" id="main-body-container">
                <div class="row" id="main-body" style="overflow:hidden">   
                               
                </div> 
            </div>
            <div>
                <div class="row">
                    <div class="col-md-12" id="footer"></div>
                </div>
            </div>     
        </div>
  
    `/*html*/)
};
  