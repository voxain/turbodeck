POS.fs = {
    sys: []
};

class FsConstruct {

    #name;
    #createdAt;

    constructor(name){
        this.#name = name;
        this.#createdAt = Date.now();
    }
    getInfo() {
        return {
            name: this.#name,
            createdAt: this.#createdAt
        };
    }
}

class File extends FsConstruct {

    #content;

    constructor(name, content){
        super(name);
        this.#content = content || undefined;
    }

    get() {
        return {
            content: this.#content,
            size: this.#content.length
        };
    }
}

class Directory extends FsConstruct {

    #content;

    constructor(name, size){
        super(name);

        this.#content = [];
    }

    createDirectory(name){
        if(!confirm('An app would like to create a folder')) return;
        this.#content.push(new Directory(name));
    }

    writeFile(name, content){
        if(!confirm('An app would like to create a file')) return;
        this.#content.push(new File(name, content));
    }

    get() {
        return {
            content: this.#content
        };
    }
}

class SystemPartition extends Directory {
    #content = [
        new Directory('system'),
        new Directory('apps'),
        new Directory('home')
    ];
    constructor(name, size){
        super(name, size);
    }

    get() {
        return {
            content: this.#content
        };
    }
}


class Filesystem extends FsConstruct {

    #size;
    #mountName;
    #root;

    constructor(name, size, system){
        super(name);
        this.#size = size;

        if(system) this.#root = new SystemPartition('root');
        else this.#root = new Directory('root');
    }

    get() {
        return {
            size: this.#size,
            root: this.#root
        };
    }
}

POS.fs.sys.push(new Filesystem('Turbodeck', 7e+8, true));
POS.fs.sys.push(new Filesystem('Data', 5e+9));