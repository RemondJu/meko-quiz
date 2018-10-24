import React from 'react';
import {Table } from 'reactstrap';
import './BestPlayers.css';

const BestPlayers = (props) => {
    
        const tab = [...props.bestPlayersTab]
        let sortedTab = [];
        if (tab.length !== 0) {
            sortedTab = tab.sort((a,b) => a.score < b.score );
            sortedTab[0].rank = 1 ;

            for (let i = 1; i < sortedTab.length ; i++) {
                if (sortedTab[i].score !== sortedTab[i-1].score) {
                    sortedTab[i].rank = sortedTab[i-1].rank + 1 ;
                } else {
                    sortedTab[i].rank = sortedTab[i-1].rank;
                }
            }
        }
    
        return (
            <div className = 'bestPlayersTab' >
                <h2>Meilleurs scores</h2>
                <Table responsive borderless className = 'table-scores' >
                    <thead >
                        <tr>
                            <th>#</th>
                            <th>NOM</th>
                        <th>SCORE</th>                                                                                              
                        </tr>
                    </thead>
                    <tbody>
                        { sortedTab.map( (player, index) => {
                            while(player.rank <= 3) {
                                return (
                                    <tr key={index}>
                                        <td>{player.rank}</td>
                                        <td>{player.name}</td>
                                        <td>{player.score}</td>
                                    </tr>
                                )
                            }
                        }) }
                    </tbody>
                </Table>
                
            </div>
        )
}

export default BestPlayers ;