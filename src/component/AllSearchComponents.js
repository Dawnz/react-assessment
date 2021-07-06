import SearchComponent from "./SearchComponent"
import SortComponent from "./SortComponent"
import OrderComponent from "./OrderComponent"
import AllCardsComponent from "./AllCardsComponent"
import styled from "styled-components"

const ContainerDiv = styled.div`
display: grid;
grid-template-columns: repeat( auto-fit, minmax(500px, 1fr) );

@media (max-width: 700px)
{
    /* background-color: red; */
    display: grid;
   
    .search-components{
   /* grid-auto-flow: r; */
   
   grid-template-rows: 1fr .75fr;
   /* background-color: red; */
   row-gap:8px;
   padding-bottom: 24px;
   /* height:100%; */
    }
}
@media (max-width: 500px)
{
    /* display: flex; */
    /* justify-content: center; */
    /* flex: 2; */
    /* justify-items: center; */
}
/* align-content: flex-start; */
/* grid-auto-flow: column; */
margin-top: 24px;
padding: 0 132px;

.all-wrapper{

}
/* margin:0; */
.search-components{
    display: grid;
    /* width: 100%; */
    /* border: 1px solid red; */
    grid-auto-flow: column;
    margin-bottom: 24px;
    align-items: center;
    grid-template-columns: 2.5fr 1fr ;
    height: 32px;
}
.sort-and-order{
    display: grid;
    height:32px;
    grid-auto-flow: column;
    justify-content:space-between ;
}
.search{
    /* border: 1px solid blue; */
    width: 100%;
}
.sort {
    display: grid;
    /* height: 32px; */
    width: 212px;
    /* align-content: flex-start; */
    grid-auto-flow: column;
    /* border: 1px solid red; */

}
.sort .sub-title{
    margin:0;
    /* padding: 0; */
    width: 51px;
    font-size: 16px;
    line-height: 16px;
    font-weight:400;
    padding-left: 16px;
    height: 16px;
    align-self: center;
    /* border: 1px solid red; */

}
.order{
    padding-left: 6px;
     /* border: 1px solid red; */
     /* justify-items: flex-end; */
}
`;

export default function AllSearchComponent({ setMasterData, results, selectedSort, searchTerm, setSearchTerm, masterData, setSelectedSort, selectedOrder, setSelectedOrder }) {
    return <ContainerDiv>
        <div className="all-Wrapper">
            <div className="search-components">
                <div className="component search">
                    <SearchComponent content={results} setMasterData={setMasterData} selectedSort={selectedSort} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
                <div className="sort-and-order">
                    <div className="component sort">
                        <h3 className="sort sub-title">Sort by</h3>
                        <SortComponent setSelectedSort={setSelectedSort} />
                    </div>

                    <div className="component order">
                        <OrderComponent selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} />
                    </div>
                </div>

            </div>
            <div className="component cards">
                <AllCardsComponent cardsData={masterData} selectedOrder={selectedOrder} />
            </div>
        </div>

    </ContainerDiv>
}
