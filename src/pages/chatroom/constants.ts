// 사용할 icon 이름들
export type iconName =
  | "back"
  | "search"
  | "menu"
  | "attach_file"
  | "send"
  | "friend"
  | "chat"
  | "mypage"
  | "arrow_forward";

type icon = {
  path: string;
  viewBox: string;
};

// icon의 path와 viewbox
const IconSet: Record<iconName, icon> = {
  back: {
    path: "M25.9231 16.8392H12.8914L18.5847 11.1458C19.0397 10.6908 19.0397 9.94417 18.5847 9.48917C18.1297 9.03417 17.3947 9.03417 16.9397 9.48917L9.25141 17.1775C8.79641 17.6325 8.79641 18.3675 9.25141 18.8225L16.9397 26.5108C17.3947 26.9658 18.1297 26.9658 18.5847 26.5108C19.0397 26.0558 19.0397 25.3208 18.5847 24.8658L12.8914 19.1725H25.9231C26.5647 19.1725 27.0897 18.6475 27.0897 18.0058C27.0897 17.3642 26.5647 16.8392 25.9231 16.8392Z",
    viewBox: "0 0 36 36",
  },
  search: {
    path: "M18.6392 16.8835H17.7176L17.3909 16.5685C18.7909 14.9352 19.5142 12.7068 19.1176 10.3385C18.5692 7.09515 15.8626 4.50515 12.5959 4.10849C7.66091 3.50182 3.50757 7.65515 4.11424 12.5902C4.51091 15.8568 7.10091 18.5635 10.3442 19.1118C12.7126 19.5085 14.9409 18.7852 16.5742 17.3852L16.8892 17.7118V18.6335L21.8476 23.5918C22.3259 24.0702 23.1076 24.0702 23.5859 23.5918C24.0642 23.1135 24.0642 22.3318 23.5859 21.8535L18.6392 16.8835ZM11.6392 16.8835C8.73424 16.8835 6.38924 14.5385 6.38924 11.6335C6.38924 8.72849 8.73424 6.38349 11.6392 6.38349C14.5442 6.38349 16.8892 8.72849 16.8892 11.6335C16.8892 14.5385 14.5442 16.8835 11.6392 16.8835Z",
    viewBox: "0 0 28 28",
  },
  menu: {
    path: "M8.66667 25H27.3333C27.975 25 28.5 24.475 28.5 23.8333C28.5 23.1917 27.975 22.6667 27.3333 22.6667H8.66667C8.025 22.6667 7.5 23.1917 7.5 23.8333C7.5 24.475 8.025 25 8.66667 25ZM8.66667 19.1667H27.3333C27.975 19.1667 28.5 18.6417 28.5 18C28.5 17.3583 27.975 16.8333 27.3333 16.8333H8.66667C8.025 16.8333 7.5 17.3583 7.5 18C7.5 18.6417 8.025 19.1667 8.66667 19.1667ZM7.5 12.1667C7.5 12.8083 8.025 13.3333 8.66667 13.3333H27.3333C27.975 13.3333 28.5 12.8083 28.5 12.1667C28.5 11.525 27.975 11 27.3333 11H8.66667C8.025 11 7.5 11.525 7.5 12.1667Z",
    viewBox: "0 0 36 36",
  },
  attach_file: {
    path: "M6.36642 15.0374L15.0945 6.30933C16.8186 4.58517 19.6152 4.31293 21.4961 5.86385C23.6575 7.64576 23.7648 10.8384 21.8344 12.7688L11.6379 22.9652C10.5572 24.0459 8.80004 24.2522 7.62035 23.287C6.25917 22.1733 6.18493 20.1686 7.39761 18.9559L16.0597 10.2939C16.5134 9.84015 17.2559 9.84015 17.7096 10.2939C18.1633 10.7476 18.1633 11.4901 17.7096 11.9438L10.4912 19.1622C10.153 19.5004 10.153 20.0614 10.4912 20.3996C10.8294 20.7378 11.3904 20.7378 11.7286 20.3996L18.8315 13.2967C19.9122 12.216 20.1185 10.4589 19.1533 9.27918C18.0396 7.918 16.0349 7.84375 14.8222 9.05644L6.30042 17.5783C4.57626 19.3024 4.30402 22.099 5.85494 23.9799C7.6286 26.1331 10.8294 26.2486 12.7598 24.3182L22.8821 14.1959C25.2497 11.8283 25.6374 7.97575 23.5008 5.39363C21.0342 2.43203 16.6536 2.27529 13.9973 4.93165L5.12898 13.8C4.79075 14.1382 4.79075 14.6992 5.12898 15.0374C5.46721 15.3756 6.02818 15.3756 6.36642 15.0374Z",
    viewBox: "0 0 28 28",
  },
  send: {
    path: "M24.8846 5.51491C25.4243 4.02177 23.9775 2.57486 22.4844 3.11589L4.23668 9.71569C2.73863 10.258 2.55746 12.3021 3.93557 13.1005L9.76036 16.4729L14.9617 11.2713C15.1973 11.0437 15.5129 10.9178 15.8405 10.9206C16.1681 10.9234 16.4815 11.0549 16.7132 11.2865C16.9448 11.5182 17.0762 11.8316 17.0791 12.1592C17.0819 12.4868 16.956 12.8024 16.7284 13.0381L11.527 18.2397L14.9005 24.0648C15.6976 25.443 17.7417 25.2606 18.2839 23.7637L24.8846 5.51491Z",
    viewBox: "0 0 28 28",
  },
  friend: {
    path: "M24 16.5C26.49 16.5 28.485 14.49 28.485 12C28.485 9.51 26.49 7.5 24 7.5C21.51 7.5 19.5 9.51 19.5 12C19.5 14.49 21.51 16.5 24 16.5ZM12 16.5C14.49 16.5 16.485 14.49 16.485 12C16.485 9.51 14.49 7.5 12 7.5C9.51 7.5 7.5 9.51 7.5 12C7.5 14.49 9.51 16.5 12 16.5ZM12 19.5C8.505 19.5 1.5 21.255 1.5 24.75V27C1.5 27.825 2.175 28.5 3 28.5H21C21.825 28.5 22.5 27.825 22.5 27V24.75C22.5 21.255 15.495 19.5 12 19.5ZM24 19.5C23.565 19.5 23.07 19.53 22.545 19.575C22.575 19.59 22.59 19.62 22.605 19.635C24.315 20.88 25.5 22.545 25.5 24.75V27C25.5 27.525 25.395 28.035 25.23 28.5H33C33.825 28.5 34.5 27.825 34.5 27V24.75C34.5 21.255 27.495 19.5 24 19.5Z",
    viewBox: "0 0 36 36",
  },
  chat: {
    path: "M18 29C24.6274 29 30 23.8513 30 17.5C30 11.1487 24.6274 6 18 6C11.3726 6 6 11.1487 6 17.5C6 19.2106 6.44019 21.0085 7.32057 22.8935L7.51595 23.2988C8.17754 24.6297 8.21277 26.1859 7.61209 27.5453C7.05503 28.806 6.96023 29.5895 7.32767 29.8957C7.73008 30.231 8.8886 29.9695 10.8032 29.1111L11.3198 28.8736C12.3094 28.4082 13.4217 28.2812 14.4865 28.5073L14.7516 28.5712C15.8097 28.8571 16.8925 29 18 29Z",
    viewBox: "0 0 36 36",
  },
  mypage: {
    path: "M18 18C21.315 18 24 15.315 24 12C24 8.685 21.315 6 18 6C14.685 6 12 8.685 12 12C12 15.315 14.685 18 18 18ZM18 21C13.995 21 6 23.01 6 27V28.5C6 29.325 6.675 30 7.5 30H28.5C29.325 30 30 29.325 30 28.5V27C30 23.01 22.005 21 18 21Z",
    viewBox: "0 0 36 36",
  },
  arrow_forward: {
    path: "M6.99815 21.0151C7.48815 21.5051 8.27815 21.5051 8.76815 21.0151L17.0782 12.7051C17.4682 12.3151 17.4682 11.6851 17.0782 11.2951L8.76815 2.98505C8.27815 2.49505 7.48815 2.49505 6.99815 2.98505C6.50815 3.47505 6.50815 4.26505 6.99815 4.75505L14.2382 12.0051L6.98815 19.2551C6.50815 19.7351 6.50815 20.5351 6.99815 21.0151Z",
    viewBox: "0 0 24 24",
  },
};

export { IconSet };
