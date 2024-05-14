import { Card } from 'react-bootstrap';
import { Dropdown, DropdownButton, Stack } from 'react-bootstrap';

function Header() {

    return (
        <Stack direction="horizontal" gap={3}>
                <Card className= "h1 border border-warning shadow p-3 mb-5 bg-primary bg-gradient"
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    // fontSize: '2rem',
                    fontWeight: 'bold'
                  }}>
                Welcome to the Lo-Fi Overwatch User&nbsp;Profile!
                <DropdownButton
            id="dropdown-button-dark-example2"
            variant="secondary"
            title="Menu"
            className="mt-2"
            data-bs-theme="dark"
        >
        <Dropdown.Item href="#/action-1" active>Home</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Favorites</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Player Rankings</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Community Recommendations</Dropdown.Item>
        </DropdownButton>
                </Card>           
        
</Stack>           
                
      );
    };

export default Header;