import React, { useEffect, useState } from 'react';
import {Configuration, Sector, SectorsApi, UsersApi, UserSelect} from "@test-work/openapi-rxjs";
import {Button, Card, Checkbox, InputText, TreeSelect} from "primereact";
import {switchMap, tap} from "rxjs/operators";
import TreeNode from "primereact/treenode";
import {cloneDeep} from 'lodash';
import {apiFactory} from "./api-factory";

export type SelectPageState = {
    userSelect?: UserSelect
    treeOfSectors?: TreeNode[]
}

export const SelectPage = () : JSX.Element =>  {
    const [state, setState] = useState<SelectPageState>({});
    const openapiConfig = new Configuration();
    const sectorsApi = new SectorsApi(openapiConfig);
    const usersApi = new UsersApi(openapiConfig);

    function getMyChildren(sectors: Sector[], parent: Number | undefined): TreeNode[]{
        const tree = [] as TreeNode[];
        sectors.filter(sector => sector.parent === parent).forEach( rootSector => tree.push({
            key: rootSector.value,
            label: rootSector.name,
            data: rootSector,
            children: getMyChildren(sectors, rootSector.value)}
        ));
        return tree;
    }

    function mapToTreeNode(sectors: Sector[]) {
        const cloneOfSectors = cloneDeep(sectors);
        const tree = [] as TreeNode[];
        sectors.filter(sector => sector.parent === 0 ).forEach(rootSector => tree.push({
            key: rootSector.value,
            label: rootSector.name,
            data: rootSector,
            children: getMyChildren(cloneOfSectors, rootSector.value)
        }))

        setState({...state, treeOfSectors: tree})
    }

    // useEffect(() => {
    //     const subscription = sectorsApi.getSectors().pipe(
    //         tap((response) => { console.log("AAAA");mapToTreeNode(response)})
    //     ).subscribe();
    //     subscription.unsubscribe();
    //     // eslint-disable-next-line
    // }, [])

    useEffect(() => {

        const subscription = apiFactory.create(SectorsApi).pipe(
            switchMap(() => sectorsApi.getSectors()),
            tap(response => { console.log("AAAAAA" + response); mapToTreeNode(response)})
        ).subscribe();
        subscription.unsubscribe();
        // eslint-disable-next-line
    }, [])

    function save() {
        if(state.userSelect?.id){
            usersApi.updateUserSelect({
                id: state.userSelect?.id,
                userSelectRequest:
                    {
                        name: state.userSelect?.name ?  state.userSelect.name : "",
                        sectors: state.userSelect?.sectors ? state.userSelect.sectors : [],
                        agreedWithTerms: state.userSelect?.agreedWithTerms} })
                .pipe(
                    tap(response => setState({...state, userSelect: response as UserSelect}))
                ).subscribe();
        }
        usersApi.createUserSelect({userSelectRequest:
                {
                    name: state.userSelect?.name ?  state.userSelect.name : "",
                    sectors: state.userSelect?.sectors ? state.userSelect.sectors : [],
                    agreedWithTerms: state.userSelect?.agreedWithTerms} })
            .pipe(
                tap(response => setState({...state, userSelect: response as UserSelect}))
            ).subscribe();

    }

    const footerTemplate = () => {
        return (
            <div>
                <Button label="Save" icon="pi pi-save" onClick={save} />
            </div>
        );
    };


    return (<Card
        header="Please enter your name and pick the Sectors you are currently involved in."
        footer={footerTemplate}
    >
        <div className="p-grid">
            <div className="p-col">
                <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="name">Name</label>
                        <InputText
                            id="name"
                            value={state.userSelect?.name ? state.userSelect?.name : ""}
                            onChange={(event) => setState({ ...state, userSelect: { ...state.userSelect, name: event.currentTarget.value } })}
                        />
                    </div>
                </div>
                <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="sectors">Name</label>
                        <TreeSelect
                            id="name"
                            options={state.treeOfSectors}
                            // value={}
                            onChange={(event) => console.log(event.value)}
                            selectionMode="multiple"
                        />
                    </div>
                </div>
                <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="agreedWithTerms">Name</label>
                        <Checkbox
                            id="agreedWithTerms"
                            value={state.userSelect?.agreedWithTerms ? state.userSelect?.agreedWithTerms : false}
                            onChange={(event) => setState({ ...state, userSelect: { ...state.userSelect, agreedWithTerms: event.value } })}
                        />
                    </div>
                </div>
            </div>
        </div>


    </Card>);
};

export default SelectPage;