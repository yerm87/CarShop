import * as actionTypes from '../actionTypes';

const initialState = {
    searchParams: {
        condition: 'select',
        make: 'select',
        model: 'select',
        maxPrice: 'select',
        radius: '10',
        zip: '',
        makes: [],
        models: [],
        minYear: 'select',
        maxYear: 'select',
        minPrice: 'select',
        mileage: 'select'
    },
    searchResults: [],
    activeItems: [],
    zipIsValid: true,
    allMakes: [],
    selectedModels: [],
    loading: true,
    filterComponent: true,
    resultsPerPage: 15,
    pages: 1,
    page: 1,
    pagesArray: [],
    activePages: [],
    recommendedItems: []
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case(actionTypes.changeValue):
            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    [action.name]: action.value
                }
            }
        case(actionTypes.zipIsValid):
            return {
                ...state,
                zipIsValid: true
            }
        case(actionTypes.zipIsNotValid):
            return {
                ...state,
                zipIsValid: false
            }
        case(actionTypes.resetParams):
            return {
                ...state,
                searchParams: {
                    condition: 'select',
                    make: 'select',
                    model: 'select',
                    maxPrice: 'select',
                    radius: '10',
                    zip: '',
                    makes: [],
                    models: [],
                    minYear: 'select',
                    maxYear: 'select',
                    minPrice: 'select',
                    mileage: 'select'
                }
            }
        case(actionTypes.allMakes):
            return {
                ...state,
                allMakes: action.makes
            }
        case(actionTypes.allModels):
            return {
                ...state,
                selectedModels: action.models
            }
        case(actionTypes.emptyModels):
            return {
                ...state,
                selectedModels: []
            }
        case(actionTypes.addItemsToModels):
            const updatedModels = state.selectedModels.concat(action.items);

            return {
                ...state,
                selectedModels: updatedModels
            }
        case(actionTypes.removeItemsFromModels):
            const changedModels = [];
            state.selectedModels.forEach(element => {
                if(!action.items.includes(element)){
                    changedModels.push(element);
                }
            })
            return {
                ...state,
                selectedModels: changedModels
            }
        case(actionTypes.loadingActive):
            return {
                ...state,
                loading: true
            }
        case(actionTypes.loadingNotActive):
            return {
                ...state,
                loading: false
            }
        case(actionTypes.filterComponentActive):
            return {
                ...state,
                filterComponent: true
            }
        case(actionTypes.filterComponentNotActive):
            return {
                ...state,
                filterComponent: false
            }
        case(actionTypes.setSearchResults):
            const pages = Math.ceil(action.searchResults.length/state.resultsPerPage)
            return {
                ...state,
                searchResults: action.searchResults,
                activeItems: action.activeItems,
                pages: pages
            }
        case(actionTypes.resetSearchResults):
            return {
                ...state,
                searchResults: [],
                activeItems: [],
                pages: 1,
                page: 1,
                pagesArray: [],
                activePages: []
            }
        case(actionTypes.addMake):
            const makes = state.searchParams.makes;
            makes.push(action.make);

            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    makes: makes
                }
            }
        case(actionTypes.addModel):
            const models = state.searchParams.models;
            models.push(action.model);

            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    models: models
                }
            }
        case(actionTypes.setActiveItems):
            return {
                ...state,
                activeItems: action.activeItems
            }
        case(actionTypes.setPagesArray):
            return {
                ...state,
                pagesArray: action.pagesArray
            }
        case(actionTypes.setActivePages):
            return {
                ...state,
                activePages: action.activePages
            }
        case(actionTypes.removeMake):
            const makesItems = state.searchParams.makes;
            const index = makesItems.findIndex(element => element === action.make);
            makesItems.splice(index, 1);

            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    makes: makesItems
                }
            }
        case(actionTypes.removeModel):
            const modelsItems = state.searchParams.models;
            const indexModel = modelsItems.findIndex(element => element === action.model);
            modelsItems.splice(indexModel, 1);

            return {
                ...state,
                searchParams: {
                    ...state.searchParams,
                    models: modelsItems
                }
            }
        case(actionTypes.switchPage):
            const pagesCopy = state.pagesArray;
            const activePages = state.activePages;

            const indexPages = pagesCopy.findIndex(element => element === action.page);
            activePages.fill(false, 0, pagesCopy.length);
            activePages[indexPages] = true;

            const endPoint = action.page*state.resultsPerPage;
            const startPoint = endPoint-state.resultsPerPage;
            const activeItems = state.searchResults.slice(startPoint, endPoint);

            return {
                ...state,
                page: action.page,
                activePages: activePages,
                activeItems: activeItems
            }
        case(actionTypes.setRecommendedItems):
            return {
                ...state,
                recommendedItems: action.items
            }
        default:
            return state;
    }
}

export default reducer;