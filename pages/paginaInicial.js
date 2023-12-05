import { Tree } from "antd";
import { useRouter } from "next/router";


export default function Home(){
    const treeData = [
    {
        title: 'pages',
        key: '.',
        children: [
        {
            title: 'receita 1',
            key: './receita01',
            children: [
                {
                    title: 'pagina1.js',
                    key: './receita01/pagina1',
                },
                {
                    title: 'soneto.js',
                    key: './receita01/soneto',
                },
            ],
        },
        {
            title: 'receita 2',
            key: './receita02',
            children: [
                {
                    title: 'novaPagina.js',
                    key: './receita02/novaPagina',
                },
                {
                    title: 'outraPagina.js',
                    key: './receita02/outraPagina',
                },
            ],
        },
        {
            title: 'receita 3',
            key: './receita03',
            children: [
                {
                    title: 'index.js',
                    key: './receita03/',
                },
                {
                    title: 'movies.js',
                    key: './receita03/movies',
                },
            ],
        },
        {
            title: 'receita 4',
            key: './receita04/',
            children: [
                {
                    title: 'index.js',
                    key: './receita04/.',
                },
            ],
        },
        {
            title: 'receita 5',
            key: './receita05/',
            children: [
                {
                    title: 'movies3.js',
                    key: './receita05/movies3',
                },
            ],
        },
        {
            title: 'receita 6',
            key: './receita06/',
            children: [
                {
                    title: 'movies33.js',
                    key: './receita06/movies33',
                },
                {
                    title: 'movies333.js',
                    key: './receita06/movies333',
                },
                {
                    title: 'movies334.js',
                    key: './receita06/movies334',
                },
            ],
        },
        {
            title: 'receita 9',
            key: './receita09/',
            children: [
                {
                    title: 'movies/[id].js',
                    key: './receita09/onemovie/tt0095801',
                },
                {
                    title: 'pokemon/[id].js',
                    key: './receita09/pokemon/1',
                },
            ],
        },
        ],
    },
    ];

    const router = useRouter()

    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
        if(!info.node.children){
            router.push(info.node.key)
        }
    }
    return (
        <Tree
        showLine
        defaultExpandedKeys={['.']}
        onSelect={onSelect}
        treeData={treeData}
        />
    );
};