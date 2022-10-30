import React, {useEffect, useState} from 'react';
import {ApiError, ApiErrorItem, Sector, UserSelect} from "@test-work/openapi-rxjs";
import {Button, Card, Checkbox, InputText, Message, TreeSelect, TreeSelectSelectionKeys} from 'primereact';
import TreeNode from "primereact/treenode";
import {cloneDeep} from 'lodash';

export type SelectPageState = {
    userSelect?: UserSelect,
    treeOfSectors?: TreeNode[],
    selectedSectors?: TreeSelectSelectionKeys,
    errors?: ApiError
};

export const SelectPage = (): JSX.Element => {
    const [state, setState] = useState<SelectPageState>({});

    function getMyChildren(sectors: Sector[], parent: Number | undefined): TreeNode[] {
        const tree: TreeNode[] = [];
        sectors.filter(sector => sector.parent === parent).forEach(rootSector => tree.push({
                key: rootSector.value,
                label: rootSector.name,
                data: rootSector,
                children: getMyChildren(sectors, rootSector.value)
            } as TreeNode
        ));
        return tree;
    }

    function mapToTreeNode(sectors: Sector[]) {
        const cloneOfSectors = cloneDeep(sectors);
        const tree: TreeNode[] = [];
        sectors.filter(sector => sector.parent === 0).forEach(rootSector => tree.push({
            key: rootSector.value,
            label: rootSector.name,
            data: rootSector,
            children: getMyChildren(cloneOfSectors, rootSector.value)
        } as TreeNode))

        setState({...state, treeOfSectors: tree})
    }

    useEffect(() => {
        fetch("http://localhost:8080/sectors")
            .then(response => response.json())
            .then(result => {
                mapToTreeNode(result)
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function save() {
        let requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                    name: state.userSelect?.name ? state.userSelect.name : "",
                    sectors: state.userSelect?.sectors ? state.userSelect.sectors : [],
                    agreedWithTerms: state.userSelect?.agreedWithTerms
                }
            )
        };

        let response;

        if (state.userSelect?.id) {
            requestOptions = {...requestOptions, method: 'PUT'};
            response = fetch(`http://localhost:8080/users/user-select/${state.userSelect.id}`, requestOptions);

        }else{
            response = fetch("http://localhost:8080/users/user-select", requestOptions);
        }
        response.then(async response => {
            const data = await response.json();
            if (!response.ok) {
                return Promise.reject(data);
            }
            setState({...state, userSelect: data, errors:{}})
        }).catch(error => {
            setState({...state, errors: error});
            console.error('There was an error!', error);
        })
    }

    const getSectorsValue = (selectedSectors: TreeSelectSelectionKeys) => {
        if(selectedSectors)
        {
            return Object.keys(selectedSectors).map(value => Number(value));
        }
        return undefined;
    }

    const footerTemplate = () => {
        return (
                <Button label="Save" icon="pi pi-save" onClick={save}/>
        );
    };

    function getFieldErrors(errors: ApiError | undefined, field: string): ApiErrorItem[] {
        return (errors?.fields && errors.fields[field] && errors.fields[field]) || [];
    }

    return (
        <div className="grid">
            <Card
                header={<h4 className={"text-center"}>Please enter your name and pick the Sectors you are currently involved in.</h4>}
                footer={footerTemplate}
                className="col-4 col-offset-4"
            >
                <div className="p-grid">
                    <div className="p-col">
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="name">Name:</label>
                                <InputText
                                    id="name"
                                    value={state.userSelect?.name ? state.userSelect?.name : ""}
                                    onChange={(event) => setState({...state, userSelect: {...state.userSelect, name: event.currentTarget.value}})}
                                />
                                {getFieldErrors(state.errors, 'name').map((error, index) => (
                                    <Message key={index} severity="error" text={error.message!} />
                                ))}
                            </div>
                        </div>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="sectors">Sectors:</label>
                                <TreeSelect
                                    id="sectors"
                                    options={state.treeOfSectors}
                                    value={state.selectedSectors ? state.selectedSectors : []}
                                    onChange={(event) =>
                                        setState({...state, selectedSectors: event.value, userSelect :{ ...state.userSelect, sectors: getSectorsValue(event.value)}})}
                                    selectionMode="multiple"
                                />
                                {getFieldErrors(state.errors, 'sectors').map((error, index) => (
                                    <Message key={index} severity="error" text={error.message!} />
                                ))}
                            </div>
                        </div>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="agreedWithTerms">Agreed to Terms</label>
                                <Checkbox
                                    id="agreedWithTerms"
                                    checked={state.userSelect?.agreedWithTerms ? state.userSelect.agreedWithTerms : false}
                                    onChange={(event) => setState({...state, userSelect: {...state.userSelect,  agreedWithTerms: event.checked}})}
                                />
                                {getFieldErrors(state.errors, 'agreedWithTerms').map((error, index) => (
                                    <Message key={index} severity="error" text={error.message!} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>);
};

export default SelectPage;