import { useState } from "react";
import RequestHeader from "../../../components/Message/RequestHeader"
import RequestSearchBar from "../../../components/Message/RequestSearchBar";
import Tabs from "../../../components/Message/Tabs"
import ListCards from "../../../components/Message/ListCards";

let data = [
    {
        url: 'data:image/jpeg;base64,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',
        name: 'Frodo',
        desc: 'talk or write about (a topic) in detail, taking into account different issues or ideas.',
        count: 10,
        time: '23:22'
    },
    {
        url: 'data:image/jpeg;base64,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',
        name: 'Rafeh',
        desc: 'subject with someone and tell each other your ideas or opinions.',
        count: 12,
        time: '23:22'
    },
    {
        url: 'data:image/jpeg;base64,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',
        name: 'Akif',
        desc: 'Discuss means to have a conversation about or talk about a particular topic.',
        count: 30,
        time: '23:22'
    },
    {
        url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIYAnQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgABB//EADYQAAICAgAEBAMFBgcAAAAAAAECAAMEEQUSITEGE0FRImFxFDJCUrEjgZGhwfAHFRYkM2Lh/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAIDAQQF/8QAHhEBAQEBAAMAAwEAAAAAAAAAAAECEQMhMRJBUQT/2gAMAwEAAhEDEQA/AMkqwqieKIVVlUevUHaMou5CtIwqwDzlAGzEvtSPZyEglbF3Hck+XjWP7KZkVtc2s2+pO+8Tfw+Pq94jV5i7XtvQ0fX3+sq3a1UatnB9lYf3qX3C1ORRqwEH3I7mB4glZ2lyspA7qCP5GSlUsrLHmd9ak7KDWPi6fKWpXFqHNjsWP0AP85VZB57CR2MbrATrXaRkiJHU0JV2PWwatipHqJo+DcY89vIymAf8DfmmZkq3NdiuvdTubKWzrfMIvYNzsHMTNxltTQPZh7GScSiZVxowLxiwRd5jQWgzJvBmDTyiGRZFFh616xiCVrDKJ4iwqrDgJcW2OH269pS8KwvtWZVSg0HI2fYTQ8Rq8zBuQ+qwPhCsfbeg6r8IMj5bxbwzrdYnDcevGWkVLya0QR3lfxHw3XapFYPKfQntNFjoAo+kM9asvUn+M53W+aW+En8ze9a9JH/RqAF3cn5T6DdWq9usRu6bGol1TTOWEu8P1pzBVG5SZvDBT9Z9AydcxYDrM9xZFKb9TGzq9GsTjF2V8o6wJEfyxrpEmnRHJqcrQeEySmQvpsS6sEqPCQ/ZZB+YEurBKz4jr6Tti1g0Nxu0RO1j1EAXeCJ6wjwJ7waukWHrGjIIIZBHTGQCFUQaCGUQCNyh6XU+oMS8CU2tkW2Efs1OifnLIr8Ml4UZcXh+VzDXl3tzTn83x0f5/ra47gKIY/GOhmGv8U2qFaihlr396zpzT2jx4tLaycO3k/OokJmum6jUZPMjHvqLEc46zsXjWLxWkPjHYPuO063IVazsAdIlVz8VvEQqLse3WZDiVxLnpoCWfF/EGLXYyc3No6PKJl83ij5LHyqWIjYxe9T3uc4Qyzt4ow6wllhJ+IHcgZ0RzVqfCaawLGP4rD+glpZ6yu8M21LgpR5i+aSW5PXUsrpWfEb9KWxG3vHrYlbNBV4Bj1hn7wLKQexmNaNBDoINBDoIyaaCFUTxRJgQCVf31G+mxHOHUK+VnV615jKzfUr/AORMjQ36y44WijiOQynuE/Sc/m+x1eD5SvFMY1mmihVWssA9ln3Vmf4pwzJq4slCWXPVvfmdAvL00QQNdt79p9J8gWaDKCIpn8PosAVKl3Jy+ldTtUHh3CNas3TlDaU66mB8d5D4eD+xPKWGtiaPHoGNUEB/dMn/AIjPvh1eh+ISc5ate8YbhNIy86pbyRWzDnbW9CPcXwmx8u2ulnFS/dPN0PU9u3TWvnK3As5LgZqv2eRj/EASR6y11xzzP5RkG3YpFh5mHYiKsNCXeZjCotyjQlPYOpjy9JqcPcB5v81x9b7nf01NbbKLwpShsuuPVlAC/Lcv7R0lMz0jr6TtiV3rHrYlb6xmErO8E9h32hrO8WbvMa1dYjCiCSHURkk1EmBPFhAINea2JZcKPJnL8Q1ZSDr5gnf6iIa6TzHsNXEcZixCklNfUb/pJ+XPYr4dc1xuazsCc4AJOtwWM/MoMJaw9DOTrt4r7uY2lR2mW/xBx2XhiM3be+svuL0u9tZqz2xVG9hdd/fqJk/HlmTkY649Km1UALOvYRc/T69ZYKtuWwGaPh120AJ6TO0oHPL6y3ocVIATrUttHxp8WsUKdSgbvHs+7zD1nnBsZMviNddihk6kgx8RPd9r/wAL1BOHF+XRew9ffUs7R0hq6UqrVK1Coo0APSCt9ZeT05re0nbE7h0MbtiV2+sKCrRdwNwznUXckntAzXViHUQSQ6zUk1hFkFhVg17Fsz4Kxb28plff0PWNieOoZGVuxBBhZ2CXntp8SxTWCD3G4rxDOeg8tagt7ntKjgfEQtRw7mAso6dT1ZR2Ms3qpzVC3KTWe4J7zg3OV6WL2dU2TVZeA+Zk1oz9gW/pK58SjHx8tcvPqNVjbTWyT+6aS/hWHWCaaqkU/h11/cZnsqrAqsc/AznsCCZkinJftYrKppru3RcpBP01IXi1a1Zu3v7xniNW8jn5QF306doPOzOfErpAACyzn16tVzNzS+8H45Nt+QR8IHID8z/YmfAax1RBzMx0APUzf8HwRgYNdJ+/3f6yuY5930bPaJ3nvHHPSK3aMolCT9YtbqHvGtyvtbvBqNwHKYorgDRk7SfeLt3haaRtkXYhQNSFZ6Qm9xkYmsIsGsIswwgnEThJEgKSToDuTAK7NxLLLqrsV1TJU8qhjoP/ANTLbhHEEvXy7A1d6dHR++5jm4uc7xVw9KG/29eQAvsx95veIcIrywtqHy8hPu2L3nL5ZLXZ4e5nszbjJlVFGYga+8DrUzub4cw023mWEfM94uOKcYwLHry8VrlXemqHQD6Ss4h4mutJX7PYvttNSUzf0v8AlP2X4xRi0LyoNH3mWyiA2hGuI8QfJ6nYPruV2ix2dy2M8+ob103wiyuniOPdceVFfbH2n0NWDqGQ7UjYI9Z8zbtNL4R4kxVsG5idDmr37eolcobjSOekUtMNa/w6izkR0y93WVt3RiJYXkStyD8ZmGhayAPeFcwBPWBm4SFWBU9JNrErXmsZVX3Y6jIjrCrKa/j2Bj7Hmmxh2FY3Ky7xbYd/Z8ZQPQu2/wBJnYeY1Wu5lUbYgAepMy3injIcfYcOwFe9rqeh+QlFm8Tys5ici4keijoP4RRREu/4tjxf0TDu+y5uPeO9Vqt/Az7jg3pfjV2oQUddifCH9p9K8BcXF+CuNa3xVdBv2ktRWfWny8RbSD6jqCPSUnHKEqwbHt5Tyd9zSHqJVcYxa8nHZLBtT6SZnyTLHmWM3uYFatLsy/4zw9cbeta9NSpddV611MrKSz2SsE7GvfFvrvr+8h3ClC3SLt2mwtjWU8cw8nQNhRz6ONdfrGGtBXYOwfUTDxnGzLsf/jc8v5T2j/kl+DSXWd4hc+yYBeJpYNWDk/SczhhsHYjdZziLmBJ6yTtBkzDLTK8Q3N8OMgrH5m6mVV2TdkHmutdz8zOnRbapMyT0F6T3fWeToppXpkgZ06BohZ6S08O5r4eevL1B7idOh+mft9axbzbjo5HcRXOsblbXtOnSVMyHEcc5d5DNoAyiy6QuWah2WdOhBQLaxS1uvRNyrc9J06UyS/A55OnRk3smljIdqZ7OmtFW4v3HWekzp00j/9k=',
        name: 'Mohasin',
        desc: 'Unicorn Coloring Book for Kids Ages 4-8: Unique Unicorn.',
        count: 3,
        time: '23:22'
    },
    {
        url: 'https://media.istockphoto.com/id/1335295926/photo/asian-businesswoman-standing-smiling-at-the-camera.jpg?b=1&s=170667a&w=0&k=20&c=LjSOVOus-AeiTWS-sGHn7toeHzYEJLBq6Vf_PtIb_V0=',
        name: 'Osama',
        desc: 'A red sun rises, blood has been spilled this night.',
        count: 36,
        time: '23:22'
    },
    {
        url: 'https://media.istockphoto.com/id/1370511233/photo/young-woman-working-from-home-with-a-boston-terrier-dog-freelancer-businesswoman-using-laptop.jpg?b=1&s=170667a&w=0&k=20&c=gBZp146qhWPdsfKExEZnM3ZuLXDjbPSBwyVRA5OQZT4=',
        name: 'Qasim',
        desc: 'SDASD Multifunction Timing Plank Trainer, Chest Muscle Waist and Abdomen Training.',
        count: 3,
        time: '23:22'
    },
    {
        url: 'https://media.istockphoto.com/id/1356785346/photo/woman-in-coat-messaging-on-smartphone-standing-outside-in-the-city.jpg?b=1&s=170667a&w=0&k=20&c=rpODgUSWgp3YP2HmDbGf_BWprRjSUJVNtsZ-SzkvC24=',
        name: 'Ammar',
        desc: 'Get the most out of Crunchbase. Try Pro Free. Crunchbase.',
        count: 1,
        time: '23:22'
    },
    {
        url: 'https://media.istockphoto.com/id/1353365157/photo/copy-space-shot-of-young-woman-lounging-on-sofa-with-hands-behind-head-and-daydreaming.jpg?b=1&s=170667a&w=0&k=20&c=SLVwUAY8NaWL8CwIZOtVrmzp1zBCjQMDPyBV9QKfYt8=',
        name: 'Zohaib',
        desc: 'A red sun rises, blood has been spilled this night.',
        count: 6,
        time: '23:22'
    }
]


interface Props {
    isInbox: any;
    setInbox: any;
}

const Requests = (props: Props) => {
    let { isInbox, setInbox } = props
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(data);
    const [masterDataSource, setMasterDataSource] = useState(data);

    const searchFilterFunction = (text: any) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource and update FilteredDataSource
            const newData = masterDataSource.filter(function (item: any) {
                // Applying filter for the inserted text in search bar
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };
    return (
        <>
            <RequestHeader />
            <RequestSearchBar search={search} searchFilterFunction={searchFilterFunction} />
            <Tabs isInbox={isInbox} setInbox={setInbox} />
            <ListCards data={filteredDataSource} />
        </>
    )
}

export default Requests