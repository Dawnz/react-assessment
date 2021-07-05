import SearchComponent from "./SearchComponent"
import SortComponent from "./SortComponent"
import OrderComponent from "./OrderComponent"
import AllCardsComponent from "./AllCardsComponent"
import styled from "styled-components"

const ContainerDiv = styled.div`
display: grid;
align-content: flex-start;
margin-top: 24px;
padding: 0 132px;


/* margin:0; */
.search-components{
    display: grid;
    /* border: 1px solid red; */
    grid-auto-flow: column;
    margin-bottom: 24px;
    /* grid-template-columns: 2.5fr 1.5fr 1fr ; */
    height: 32px;
}
.search{
    /* border: 1px solid blue; */
}
.sort {
    display: grid;
    /* height: 20px; */
    /* align-content: flex-start; */
    grid-auto-flow: column;

}
.sort .sub-title{
    margin:0;
    padding: 0;
    /* width: 51px; */
    height: 16px;
    line-height: 16px;
    font-weight:400;
    align-self: center;

}
.order{
    padding-left: 6px;
}
`;

export default function AllSearchComponent({ setMasterData, results, selectedSort, searchTerm, setSearchTerm, masterData, setSelectedSort, selectedOrder, setSelectedOrder }) {
    return <ContainerDiv>
        <div className="search-components">
            <div className="component search">
                <SearchComponent content={results} setMasterData={setMasterData} selectedSort={selectedSort} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>

            <div className="component sort">
                <h3 className="sort sub-title">Sort By</h3>
                <SortComponent setSelectedSort={setSelectedSort} />
            </div>

            <div className="component order">
                <OrderComponent selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} />
            </div>

        </div>
        <div className="component cards">
            <AllCardsComponent cardsData={masterData} />
        </div>

    </ContainerDiv>
}
