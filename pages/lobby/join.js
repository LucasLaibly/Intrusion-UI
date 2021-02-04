import Link from "next/link";
import Head from "next/head";
import LobbyLayout from "../../components/Layouts/LobbyLayout";
import Lobby from "../../components/Lobby/Lobby";

//colors : #111d5e(dark blue) #c70039(pink) #f37121(orange) #c0e218 (yellow) -> palette 226115
export default function JoinLobby() {
  return (
    <LobbyLayout>
      <Lobby />
    </LobbyLayout>
  );
}
