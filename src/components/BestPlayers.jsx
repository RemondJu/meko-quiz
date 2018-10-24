import React from 'react';
import {Table } from 'reactstrap';

const BestPlayers = (props) => {
    console.log(`bestPlayersTab' ${props.bestPlayersTab}`);
    const tab = [...props.bestPlayersTab]
    const sortedTab = tab.sort((a,b) => a.score < b.score );
    console.log(sortedTab);

    return (
        <div>
            <Table responsive>
                <thead>
                    <tr>
                        <th></th>
                        <th>NOM</th>
                        <th>SCORE</th>                                                                                                              
                    </tr>
                </thead>
                <tbody>
                    {sortedTab.map( (player, index) => 
                        <tr key={index + 1}>
                            <td>{index + 1}</td>
                            <td>{player.name}</td>
                            <td>{player.score}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            
        </div>
    )
}

export default BestPlayers ;